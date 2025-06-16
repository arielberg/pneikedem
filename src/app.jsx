import React, { useState } from 'react';
import { Phone, Navigation, Users, ArrowRight, ArrowLeft, Plus, MessageCircle, MapPin, Trash2, Lock, LogOut, User, UserPlus, X } from 'lucide-react';

const ResidentApp = () => {
  const [families, setFamilies] = useState([]);
  const [currentView, setCurrentView] = useState('list');
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [formData, setFormData] = useState({
    familyName: '',
    wazeLocation: '',
    members: [
      { name: '', phone: '', role: 'אב' },
      { name: '', phone: '', role: 'אם' }
    ]
  });
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  
  const ADMIN_PASSWORD = '1234';

  const handleFormSubmit = () => {
    // בדיקה שיש לפחות שם משפחה ומיקום ובן משפחה אחד עם שם
    const hasValidMembers = formData.members.some(member => member.name.trim());
    if (formData.familyName && formData.wazeLocation && hasValidMembers) {
      const newFamily = {
        id: Date.now(),
        familyName: formData.familyName,
        wazeLocation: formData.wazeLocation,
        members: formData.members.filter(member => member.name.trim()), // רק חברים עם שמות
        submittedAt: new Date().toLocaleString('he-IL')
      };
      setFamilies([...families, newFamily]);
      setFormData({
        familyName: '',
        wazeLocation: '',
        members: [
          { name: '', phone: '', role: 'אב' },
          { name: '', phone: '', role: 'אם' }
        ]
      });
      setCurrentView('list');
    } else {
      alert('נא למלא לפחות שם משפחה, מיקום ובן משפחה אחד עם שם');
    }
  };

  const handleFamilyInputChange = (field, value) => {
    if (field === 'wazeLocation' && value.includes('google.com/maps')) {
      value = handleGoogleMapsLink(value);
    }
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  const addFamilyMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { name: '', phone: '', role: 'ילד/ה' }]
    });
  };

  const removeFamilyMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData({ ...formData, members: newMembers });
    }
  };

  const getCurrentLocation = () => {
    console.log('מנסה לקבל מיקום נוכחי...');
    setIsGettingLocation(true);
    
    if (!navigator.geolocation) {
      console.log('Geolocation לא נתמך');
      alert('הדפדפן שלך לא תומך במיקום אוטומטי');
      setIsGettingLocation(false);
      return;
    }

    console.log('Geolocation נתמך, מבקש מיקום...');
    
    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 60000
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('מיקום התקבל:', position);
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const locationString = `${lat},${lng}`;
        
        console.log('מעדכן מיקום לשדה:', locationString);
        
        setFormData(prev => {
          console.log('מצב קודם:', prev);
          const newData = {
            ...prev,
            wazeLocation: locationString
          };
          console.log('מצב חדש:', newData);
          return newData;
        });
        
        setIsGettingLocation(false);
        console.log('מיקום עודכן בהצלחה');
      },
      (error) => {
        console.error('שגיאה בקבלת מיקום:', error);
        setIsGettingLocation(false);
        
        let errorMessage = 'לא הצלחנו לקבל את המיקום. ';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'נדחתה הגישה למיקום. אנא אפשר גישה למיקום בהגדרות הדפדפן.';
            console.log('הרשאת מיקום נדחתה');
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'מידע המיקום לא זמין.';
            console.log('מיקום לא זמין');
            break;
          case error.TIMEOUT:
            errorMessage += 'תם הזמן לקבלת המיקום. נסה שוב.';
            console.log('תם זמן קבלת מיקום');
            break;
          default:
            errorMessage += 'שגיאה לא ידועה.';
            console.log('שגיאה לא ידועה:', error);
            break;
        }
        alert(errorMessage);
      },
      options
    );
  };

  const handleGoogleMapsLink = (link) => {
    const coordsMatch = link.match(/@(-?\d+\.?\d*),(-?\d+\.?\d*)/);
    if (coordsMatch) {
      const lat = coordsMatch[1];
      const lng = coordsMatch[2];
      return `${lat},${lng}`;
    }
    return link;
  };

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = (phoneNumber) => {
    const cleanPhone = phoneNumber.replace(/[-\s]/g, '');
    const internationalPhone = cleanPhone.startsWith('0') ? 
      '972' + cleanPhone.substring(1) : cleanPhone;
    window.open(`https://wa.me/${internationalPhone}`, '_blank');
  };

  const handleNavigate = (wazeLocation) => {
    window.open(`https://waze.com/ul?q=${encodeURIComponent(wazeLocation)}`, '_blank');
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('סיסמה שגויה!');
      setAdminPassword('');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  const deleteFamily = (familyId, familyName) => {
    if (!isAdmin) {
      setShowAdminLogin(true);
      return;
    }
    
    const confirmDelete = window.confirm(`האם אתה בטוח שברצונך למחוק את משפחת ${familyName}?`);
    if (confirmDelete) {
      setFamilies(families.filter(family => family.id !== familyId));
      if (selectedFamily && selectedFamily.id === familyId) {
        setCurrentView('list');
        setSelectedFamily(null);
      }
    }
  };

  const viewFamily = (family) => {
    setSelectedFamily(family);
    setCurrentView('details');
  };

  if (currentView === 'list') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-800">משפחות הישוב</h1>
              </div>
              <div className="flex items-center space-x-3">
                {isAdmin && (
                  <button
                    onClick={handleAdminLogout}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>יציאה ממנהל</span>
                  </button>
                )}
                <button
                  onClick={() => setCurrentView('form')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span>הוסף משפחה חדשה</span>
                </button>
              </div>
            </div>

            {families.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 mb-4">עדיין אין משפחות רשומות</p>
                <button
                  onClick={() => setCurrentView('form')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  הוסף את המשפחה הראשונה
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {families.map((family) => (
                  <div
                    key={family.id}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div 
                        className="flex items-center space-x-4 cursor-pointer flex-1"
                        onClick={() => viewFamily(family)}
                      >
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          {family.familyName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">משפחת {family.familyName}</h3>
                          <p className="text-gray-600">{family.members.length} בני משפחה • נרשם: {family.submittedAt}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {isAdmin && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteFamily(family.id, family.familyName);
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                            title="מחק משפחה"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">כניסת מנהל</h3>
              </div>
              <p className="text-gray-600 mb-4">
                נדרשת סיסמת מנהל כדי למחוק משפחות
              </p>
              <div className="space-y-4">
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="הכנס סיסמת מנהל"
                  autoFocus
                />
                <div className="flex space-x-3">
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    התחבר
                  </button>
                  <button
                    onClick={() => {
                      setShowAdminLogin(false);
                      setAdminPassword('');
                    }}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg transition-colors"
                  >
                    ביטול
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (currentView === 'form') {
   navigator.geolocation.getCurrentPosition(function(a){ console.log("aaaa",a);});
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">רישום משפחה חדשה</h1>
              <button
                onClick={() => setCurrentView('list')}
                className="text-gray-600 hover:text-gray-800 flex items-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>חזור לרשימה</span>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  שם המשפחה *
                </label>
                <input
                  type="text"
                  value={formData.familyName}
                  onChange={(e) => handleFamilyInputChange('familyName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="הכנס את שם המשפחה"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  מיקום בוויז *
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={formData.wazeLocation}
                    onChange={(e) => handleFamilyInputChange('wazeLocation', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="כתובת מלאה או הדבק קישור מגוגל מפות"
                  />
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium mb-2">💡 דרכים לקבל את המיקום שלך:</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• פתח גוגל מפות בטלפון → שתף מיקום → העתק קישור</li>
                      <li>• בוויז: לחץ על הבית → שתף → העתק קישור</li>
                      <li>• כתוב כתובת מלאה: "רחוב 123, עיר"</li>
                      <li>• בגוגל: חפש את הכתובת שלך → העתק הקואורדינטות</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    בני המשפחה *
                  </label>
                  <button
                    type="button"
                    onClick={addFamilyMember}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg flex items-center space-x-2 transition-colors text-sm"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>הוסף בן משפחה</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {formData.members.map((member, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-5 w-5 text-gray-600" />
                          <span className="font-medium text-gray-700">בן משפחה {index + 1}</span>
                        </div>
                        {formData.members.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFamilyMember(index)}
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <input
                            type="text"
                            value={member.role}
                            onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="תפקיד (אב/אם/ילד)"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="שם פרטי"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            value={member.phone}
                            onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="טלפון"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleFormSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                שלח טופס משפחה
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'details' && selectedFamily) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">משפחת {selectedFamily.familyName}</h1>
              <div className="flex items-center space-x-3">
                {isAdmin && (
                  <button
                    onClick={() => deleteFamily(selectedFamily.id, selectedFamily.familyName)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>מחק משפחה</span>
                  </button>
                )}
                <button
                  onClick={() => setCurrentView('list')}
                  className="text-gray-600 hover:text-gray-800 flex items-center space-x-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>חזור לרשימה</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {selectedFamily.familyName.charAt(0)}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">משפחת {selectedFamily.familyName}</h2>
                <p className="text-gray-600">נרשם: {selectedFamily.submittedAt}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Navigation className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-800">מיקום</p>
                      <p className="text-gray-600">{selectedFamily.wazeLocation}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNavigate(selectedFamily.wazeLocation)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>נווט</span>
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">בני המשפחה</h3>
                <div className="grid gap-4">
                  {selectedFamily.members.map((member, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                            {member.name.charAt(0) || member.role.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{member.name || 'ללא שם'}</p>
                            <p className="text-sm text-gray-600">{member.role}</p>
                            {member.phone && <p className="text-gray-600">{member.phone}</p>}
                          </div>
                        </div>
                        {member.phone && (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleWhatsApp(member.phone)}
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span>וואטסאפ</span>
                            </button>
                            <button
                              onClick={() => handleCall(member.phone)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                            >
                              <Phone className="h-4 w-4" />
                              <span>התקשר</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ResidentApp;
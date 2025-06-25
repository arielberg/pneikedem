import React, { useState, useEffect, onSnapshot } from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, Navigation, Users, ArrowRight, ArrowLeft, Plus, MessageCircle, MapPin, Trash2, Lock, LogOut, User, UserPlus, X } from 'lucide-react';
import db from './firebaseConfig'; // Import Firestore instance
import { addDoc, getDocs, collection } from 'firebase/firestore'; // Import addDoc and collection
import { getAuth, RecaptchaVerifier } from "firebase/auth";

    const ResidentApp = () => {
      const [families, setFamilies] = useState([]);
      const [filteredFamilies, setFilteredFamilies] = useState([]);
      const [currentView, setCurrentView] = useState('list');
      const [selectedFamily, setSelectedFamily] = useState(null);
      const [formData, setFormData] = useState({
        key: '2222',
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

       // Fetch families from Firestore on component mount
       
       useEffect(() => {
        const fetchFamilies = async () => {
          const familiesCollection = collection(db, 'families');
          const familiesSnapshot = await getDocs(familiesCollection);
          const familiesData = familiesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setFamilies(familiesData);
          setFilteredFamilies(familiesData); 
        };
      
        fetchFamilies();
      }, []);

      const handleFormSubmit = async () => {
        const hasValidMembers = formData.members.some(member => member.name.trim());
        if (formData.familyName && formData.wazeLocation && hasValidMembers) {
          const newFamily = {
            familyName: formData.familyName,
            wazeLocation: formData.wazeLocation,
            members: formData.members.filter(member => member.name.trim()),
            submittedAt: new Date().toLocaleString('he-IL')
          };
          await addDoc(collection(db, 'families'), newFamily);

          setFormData({
            familyName: '',
            wazeLocation: '',
            members: [
              {   key: '1', name: '', phone: '', role: 'אב' },
              {   key: '2', name: '', phone: '', role: 'אם' }
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
        setIsGettingLocation(true);
        if (!navigator.geolocation) {
          alert('הדפדפן שלך לא תומך במיקום אוטומטי');
          setIsGettingLocation(false);
          return;
        }

        const options = {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 60000
        };

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lng = position.coords.longitude.toFixed(6);
            const locationString = `${lat},${lng}`;
            setFormData(prev => ({
              ...prev,
              wazeLocation: locationString
            }));
            setIsGettingLocation(false);
          },
          (error) => {
            setIsGettingLocation(false);
            let errorMessage = 'לא הצלחנו לקבל את המיקום. ';
            switch(error.code) {
              case error.PERMISSION_DENIED:
                errorMessage += 'נדחתה הגישה למיקום. אנא אפשר גישה למיקום בהגדרות הדפדפן.';
                break;
              case error.POSITION_UNAVAILABLE:
                errorMessage += 'מידע המיקום לא זמין.';
                break;
              case error.TIMEOUT:
                errorMessage += 'תם הזמן לקבלת המיקום. נסה שוב.';
                break;
              default:
                errorMessage += 'שגיאה לא ידועה.';
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
      const filter = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const result = families.filter((family) => {
          if ((family.familyName || '').toLowerCase().includes(searchTerm)) return true;
        
          // Optionally include this line to also search in members' names:
          if (family.members.some(member => (member.name || '').toLowerCase().includes(searchTerm))) return true;
        
          return false; // fallback if no match
        });
        setFilteredFamilies(result);
      };
      
      if (currentView === 'list') {
       
        return (
          <div style={{padding: '20px 0'}}>
            <div className=""  style={{padding: '10px 20px'}}>          
                <div className="topbar">                  
                  <h1 className="h3 mb-0"><Users className="me-3" size={32} /><span style={{marginRight:'10px'}}>משפחות הישוב</span></h1>
                </div>
                <div>
                  <input type="text" className="form-control mb-3" onKeyUp={filter} style={{margin:'10px 0'}} placeholder="חפש משפחה לפי שם" />
                </div>
                <div className="d-flex align-items-center gap-3">                
                  <button
                    onClick={() => setCurrentView('form')}
                    className="btn btn-primary d-flex align-items-center gap-2"
                    style={{ margin: '10px 0' }}
                  >
                    <Plus size={20} />
                    הוסף משפחה חדשה
                  </button>
                </div>
              </div>
              <div className="rows">
                {filteredFamilies.map((family) => (
                  <div key={family.id} className="col">
                      <div style={{backgroundColor:'#fff', borderBottom: '3px solid #aaa' ,margin:'0px 0px 10px',padding: '10px 19px'}} >
                        <div 
                          onClick={() => viewFamily(family)}
                        >
                          <div>
                            <h5 className="card-title mb-1">משפחת {family.familyName} ({family.members.filter(s=>s.role=='אב'||s.role=='אם').map(s=>s.name).join(',')})</h5>
                            <p className="card-text text-muted">{family.members.length} בני משפחה</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          {isAdmin && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteFamily(family.id, family.familyName);
                              }}
                              className="btn btn-danger btn-sm"
                              title="מחק משפחה"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                ))}

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
          </div>
        );
      }

      if (currentView === 'form') {
        return (
            <div style={{ padding: '20px' }}>             
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0">רישום משפחה חדשה</h1>
                  <button
                    onClick={() => setCurrentView('list')}
                    className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    חזור לרשימה
                  </button>                  
                </div>

                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label">שם המשפחה *</label>
                    <input
                      type="text"
                      value={formData.familyName}
                      onChange={(e) => handleFamilyInputChange('familyName', e.target.value)}
                      className="form-control"
                      placeholder="הכנס את שם המשפחה"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">מיקום בוויז *</label>
                    <input
                      type="text"
                      value={formData.wazeLocation}
                      onChange={(e) => handleFamilyInputChange('wazeLocation', e.target.value)}
                      className="form-control mb-3"
                      placeholder="כתובת מלאה או הדבק קישור מגוגל מפות"
                    />
                    <button
                      onClick={getCurrentLocation}
                      disabled={isGettingLocation}
                      className="btn btn-outline-primary mb-3"
                    >
                      {isGettingLocation ? 'מקבל מיקום...' : 'קבל מיקום נוכחי'}
                    </button>
                    <div className="alert alert-info">
                      <strong className="d-block mb-2">💡 דרכים לקבל את המיקום שלך:</strong>
                      <ul className="mb-0">
                        <li>פתח גוגל מפות בטלפון → שתף מיקום → העתק קישור</li>
                        <li>בוויז: לחץ על הבית → שתף → העתק קישור</li>
                        <li>כתוב כתובת מלאה: "רחוב 123, עיר"</li>
                        <li>בגוגל: חפש את הכתובת שלך → העתק הקואורדינטות</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <label className="form-label">בני המשפחה *</label>
                      <button
                        type="button"
                        onClick={addFamilyMember}
                        className="btn btn-success btn-sm d-flex align-items-center gap-2"
                      >
                        <UserPlus size={16} />
                        הוסף בן משפחה
                      </button>
                    </div>

                    {formData.members.map((member, index) => (
                      <div key={index} className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center gap-2">
                              <User size={20} />
                              <span className="fw-medium">בן משפחה {index + 1}</span>
                            </div>
                            {formData.members.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeFamilyMember(index)}
                                className="btn btn-link text-danger p-0"
                              >
                                <X size={16} />
                              </button>
                            )}
                          </div>
                          <div className="row g-3">
                            <div className="col-md-4">
                              <input
                                type="text"
                                value={member.role}
                                onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                                className="form-control"
                                placeholder="תפקיד (אב/אם/ילד)"
                              />
                            </div>
                            <div className="col-md-4">
                              <input
                                type="text"
                                value={member.name}
                                onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                                className="form-control"
                                placeholder="שם פרטי"
                              />
                            </div>
                            <div className="col-md-4">
                              <input
                                type="tel"
                                value={member.phone}
                                onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                                className="form-control"
                                placeholder="טלפון"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-12">
                    <button
                      onClick={handleFormSubmit}
                      className="btn btn-success w-100"
                    >
                      שלח טופס משפחה
                    </button>
                  </div>
                </div>
              </div>
        );
      }
     
     
        if (currentView === 'login') {
          const auth = getAuth();
          if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
              size: 'invisible',
              callback: (response) => {
                console.log('Recaptcha verified:', response);
              }
            }, auth);
          }
          return (
            <div>aaa</div>
      )}

      if (currentView === 'details' && selectedFamily) {
        return (
          <div>
            <div style={{'padding': '20px'}}>
              <div>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0">משפחת {selectedFamily.familyName}</h1>
                    <div className="d-flex align-items-center gap-3">
                      {isAdmin && (
                        <button
                          onClick={() => deleteFamily(selectedFamily.id, selectedFamily.familyName)}
                          className="btn btn-danger d-flex align-items-center gap-2"
                        >
                          <Trash2 size={16} />
                          מחק משפחה
                        </button>
                      )}
                      <button
                        onClick={() => setCurrentView('list')}
                        className="btn btn-link text-decoration-none d-flex align-items-center gap-2"
                      >
                        <ArrowLeft size={20} />
                        חזור לרשימה
                      </button>
                      <button onClick={() => setCurrentView('login')}>ערוך</button>
                    </div>
                  </div>

                  <div className="row g-4">
                    <div className="col-12 text-center">
                      <div className="card">
                        <div className="card-body">
                          <div className="avatar-circle bg-primary text-white rounded-circle mx-auto mb-3" style={{ padding:'15px 5px', width: '80px', height: '80px', fontSize: '32px' }}>
                            <Users size={45} />
                          </div>
                          <h2 className="h4 mb-2">משפחת {selectedFamily.familyName}</h2>
                          <p className="text-muted">נרשם: {selectedFamily.submittedAt}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="card">
                        <div className="card-body d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-3">
                            <Navigation size={24} />
                            <div>
                              <p className="fw-semibold mb-1">מיקום</p>
                              <p className="text-muted">{selectedFamily.wazeLocation}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleNavigate(selectedFamily.wazeLocation)}
                            className="btn btn-primary d-flex align-items-center gap-2"
                          >
                            <Navigation size={16} />
                            נווט
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <h3 className="h5 mb-3">בני המשפחה</h3>
                      <div className="row row-cols-1 g-4">
                        {selectedFamily.members.map((member, index) => (
                          <div key={index} className="col">
                            <div className="card">
                              <div className="card-body d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <div className="avatar-circle bg-primary-subtle text-primary rounded-circle" style={{ padding:'4px 5px', width: '40px', height: '40px', fontSize: '16px' }}>
                                    <User size={30} />
                                  </div>
                                  <div>
                                    <p className="fw-semibold mb-1">{member.name || 'ללא שם'}</p>
                                    <p className="text-muted small">{member.role}</p>
                                    {member.phone && <p className="text-muted">{member.phone}</p>}
                                  </div>
                                </div>
                                
                              </div>
                                {member.phone && (
                                  <div className="gap-2">
                                    <button
                                      onClick={() => handleWhatsApp(member.phone)}
                                      className="btn btn-success"
                                      style={{width: '50%', borderRadius: '0 0 4px'}}
                                    >
                                      <MessageCircle size={16} /><span style={{marginRight:'5px'}}>ווטסאפ</span>
                                      
                                    </button>
                                    <button
                                      onClick={() => handleCall(member.phone)}
                                      className="btn btn-primary"
                                      style={{width: '50%', borderRadius: '0 0 0 4px'}}
                                    >
                                      <Phone size={16} /><span style={{marginRight:'5px'}}>התקשר</span>
                                      
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
          </div>
        );
      }

      return null;
    };

export default ResidentApp;
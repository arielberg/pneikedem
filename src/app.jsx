import React, { forwardRef, useImperativeHandle, useState, useRef, useEffect, onSnapshot } from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, Navigation, Users, ArrowRight, ArrowLeft, Plus, MessageCircle, MapPin, Trash2, Lock, LogOut, User, UserPlus, X } from 'lucide-react';
import db from './firebaseConfig'; // Import Firestore instance
import { addDoc, deleteDoc, getDocs, collection, doc } from 'firebase/firestore'; // Import addDoc and collection
import { getAuth, RecaptchaVerifier } from "firebase/auth";

    const ResidentApp = forwardRef(({currentView, setCurrentView}, ref) => {
   
      useImperativeHandle(ref, () => ({
        filter(e) {
          const searchTerm = e.target.value.toLowerCase();
          const result = families.filter((family) => {
            if ((family.familyName || '').toLowerCase().includes(searchTerm)) return true;
          
            // Optionally include this line to also search in members' names:
            if (family.members.some(member => (member.name || '').toLowerCase().includes(searchTerm))) return true;
          
            return false; // fallback if no match
          });
          setFilteredFamilies(result);
        }
      }));

      const [families, setFamilies] = useState([]);
      const [filteredFamilies, setFilteredFamilies] = useState([]);

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
      const canEdit = (selectedFamily) => {
        let isAdmin = localStorage.getItem('familyPhone') == 'admin';
        let phones = selectedFamily.members.map(a=>{return a.phone.replace(/\D/g, "")});
        let current = localStorage.getItem('familyPhone');

        return phones.indexOf(current) !== -1 || isAdmin;
      }
      const handleFormSubmit = async () => {
        const hasValidMembers = formData.members.some(member => member.name.trim());
        if (formData.familyName && formData.wazeLocation && hasValidMembers) {
          const newFamily = {
            familyName: formData.familyName,
            wazeLocation: formData.wazeLocation,
            members: formData.members.filter(member => member.name.trim()),
            submittedAt: new Date().toLocaleString('he-IL'),
            password:localStorage.getItem('pass')
          };
          await addDoc(collection(db, 'families'), newFamily)
            .then((docRef) => {
              if ( !localStorage.getItem('familyPhone') ) {
                localStorage.setItem('familyPhone', formData.members[0].phone);
              }
            });

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

      const deleteFamily = async (selectedFamily) => {
        console.log('Deleting family:', selectedFamily.id, selectedFamily.familyName);
        
        if ( !canEdit(selectedFamily) ) {
          setShowAdminLogin(true);
          return;
        }
        const confirmDelete = window.confirm(`האם אתה בטוח שברצונך למחוק את משפחת ${selectedFamily.familyName}?`);
        if (confirmDelete) {
          await deleteDoc(doc(db, 'families', selectedFamily.id));
        }
      };

      const editFrom = (family) => {
        setCurrentView('form');
        setFormData({
          familyName: family.familyName,
          wazeLocation: family.wazeLocation,
          members: family.members.filter(member => member.name.trim()),
          submittedAt: new Date().toLocaleString('he-IL')
        });
      };

      const viewFamily = (family) => {
        setSelectedFamily(family);
        setCurrentView('details');
      };      
      
      if (currentView === 'list') {
       
        return (
          <div style={{padding: '0'}}>    
              <div className="rows">
                {filteredFamilies.map((family) => (
                  <div key={family.id} className="col">
                      <div style={{backgroundColor:'#fff', borderBottom: '3px solid #aaa' ,margin:'0px 0px 10px',padding: '10px 19px'}} >
                        <div style={{width: 'calc( 100% - 80px)'}}
                          onClick={() => viewFamily(family)}
                        >
                          <h5 className="card-title mb-1">משפחת {family.familyName} ({family.members.filter(s=>s.role=='אב'||s.role=='אם').map(s=>s.name).join(',')})</h5>
                          <p className="card-text text-muted">{family.members.length} בני משפחה</p>                      
                        </div>
                        <div style={{float:'left', marginTop:'-40px'}} className="d-flex align-items-center gap-2">
                          { localStorage.getItem('familyPhone') == 'admin' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteFamily(family);
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
                ))
                }
            </div>
          </div>
        );
      }
      if (currentView === 'login') {
        return (          
          <div style={{ padding: '20px' }}>  
            <button
            onClick={() => setCurrentView('form')}
            className="btn btn-primary d-flex align-items-center gap-2"
            style={{ margin: '10px 0' }}
          >
            <Plus size={20} />
           משפחה חדשה
          </button>
          <div style={{direction:'rtl',margin:'0 auto',textAlign:'right'}}>
            <label className="form-label">מספר טלפון *</label>
            <input id='phoneTb' style={{width:'400px',textAlign:'right'}} onKeyUp={(e)=>{  console.log('aaa', e.target.value); if(e.target.value=='admin'){  document.getElementById('passTb').style.display = 'block';console.log('aaa'); }}} className="form-control mb-3" placeholder="הכנס מספר טלפון" />    

            <input id='passTb' style={{width:'400px',textAlign:'right', display:'none'}} className="form-control mb-3" placeholder="סיסמא" />           
            <button
            onClick={() => {
              localStorage.setItem('familyPhone', document.getElementById('phoneTb').value);
              localStorage.setItem('pass', document.getElementById('passTb').value);
              setCurrentView('form');
            }}
            className="btn btn-primary d-flex align-items-center gap-2"
            
          >
            כניסה
          </button>
          </div>
          
          </div>
          );
      }
      if (currentView === 'form') {
        return (
            <div style={{ padding: '20px' }}>             
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0">רישום משפחה חדשה</h1>                                  
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

      if (currentView === 'details' && selectedFamily) {
        return (
          <div>
            <div style={{'padding': '20px'}}>
              <div>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">                    
                    <div className="d-flex align-items-center gap-3">
                     
                      { canEdit(selectedFamily) && (
                       <button className='btn btn-secondary' onClick={() => editFrom(selectedFamily)}>ערוך</button>
                      )}    
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
    });

export default ResidentApp;
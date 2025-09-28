import React, { useState } from 'react';
import './Popup.css';
import Button from './Button';
import Icon1 from '../assets/1.svg';
import Icon2 from '../assets/2.svg';


const Popup = ({ 
  onClose, 
  title = "Code Export",
  subtitle = "Manage how you download your website's code."
}) => {
  const [activeTab, setActiveTab] = useState('html');
  const [selectedOptions, setSelectedOptions] = useState({
    useAppDirectory: true,
    includeAssets: true,
    includeCustomCode: true
  });

  const handleOptionChange = (option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleDownload = () => {
    // downlodign logic
    console.log('Downloading with options:', selectedOptions);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        
        <button className="close-button" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6L18 18" />
          </svg>
        </button>

       
        <div className="popup-header">
          <h2 className="popup-title">{title}</h2>
          <p className="popup-subtitle">{subtitle}</p>
        </div>

        
        <div className="tab-container">
          <div className="tab-navigation" >
            <button
              onClick={() => setActiveTab('html')}
              className={`tab-button ${activeTab === 'html' ? 'tab-active' : ''}`}
            >
              HTML & CSS
            </button>
            <button
              onClick={() => setActiveTab('nextjs')}
              className={`tab-button ${activeTab === 'nextjs' ? 'tab-active' : ''}`}
            >
              NextJS
            </button>
            
          </div>
          {/* <> putting this </> */}

            <div className="content-area">
        
          <div className="export-header">
            <div className="export-info">
              {activeTab === 'html' ? (
                <>
                 
                  <img src={Icon2} alt="HTML" />
                  <span className="export-title">Export as HTML & CSS</span>
                </>
              ) : (
                <>
                  <div className="icon-nextjs">
                    <img src={Icon1} alt="NextJS" />
                  </div>
                  <span className="export-title">Export as NextJS Project</span>
                </>
              )}
            </div>
            <span className="zipped-label">Zipped</span>
          </div>
           <div className="options-container">
            {activeTab === 'nextjs' && (
              <label className="option-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={selectedOptions.useAppDirectory}
                    onChange={() => handleOptionChange('useAppDirectory')}
                    className="hidden-checkbox"
                  />
                  <div className={`custom-checkbox ${selectedOptions.useAppDirectory ? 'checked' : ''}`}>
                    {selectedOptions.useAppDirectory && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M20 6L9 17L4 12" />
                      </svg>
                     
                    )}
                  </div>
                </div>
                <span className="option-text">Use 'app' directory (NextJS v13+)</span>
              </label>
            )}

            <label className="option-item">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={selectedOptions.includeAssets}
                  onChange={() => handleOptionChange('includeAssets')}
                  className="hidden-checkbox"
                />
                <div className={`custom-checkbox ${selectedOptions.includeAssets ? 'checked' : ''}`}>
                  {selectedOptions.includeAssets && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="option-text">Include assets (images, styles, fonts, etc.)</span>
            </label>

            <label className="option-item">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={selectedOptions.includeCustomCode}
                  onChange={() => handleOptionChange('includeCustomCode')}
                  className="hidden-checkbox"
                />
                <div className={`custom-checkbox ${selectedOptions.includeCustomCode ? 'checked' : ''}`}>
                  {selectedOptions.includeCustomCode && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="option-text">Include custom code</span>
            </label>
          </div>
        </div>




        </div>

      
        
        
         

       {/*lat buttn*/}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <Button className="download-button" text={activeTab === 'html' ? 'Download HTML CSS Project' : 'Download Next JS Project'} onClick={handleDownload} />
        </div>
      

        
      </div>
    </div>
  );
};

export default Popup;
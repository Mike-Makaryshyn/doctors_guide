// src/pages/SuccessPage/SuccessPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSubscription } from '../../contexts/SubscriptionContext';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Confetti from 'react-confetti';
import translations from './translations';
import useGetGlobalInfo from '../../hooks/useGetGlobalInfo';

import Stage1Img from '../../assets/stages/man-stage-1.png';
import Stage2Img from '../../assets/stages/man-stage-2.png';
import Stage3Img from '../../assets/stages/man-stage-3.png';
import Stage4Img from '../../assets/stages/man-stage-4.png';
import Stage5Img from '../../assets/stages/man-stage-5.png';
import Stage6Img from '../../assets/stages/man-stage-6.png';
import Stage7Img from '../../assets/stages/man-stage-7.png';
import Stage8Img from '../../assets/stages/man-stage-8.png';
import Stage9Img from '../../assets/stages/man-stage-9.png';
const stageImages = [Stage1Img, Stage2Img, Stage3Img, Stage4Img, Stage5Img, Stage6Img, Stage7Img, Stage8Img, Stage9Img];

const SuccessPage = () => {
  const { selectedLanguage: lang = 'en' } = useGetGlobalInfo();
  console.log('SuccessPage language:', lang);
  const messages = translations[lang] || translations.en;

  const { status, endsAt } = useSubscription();

  const navigate = useNavigate();

  // Відформатуємо дату й час у локальному форматі
  const formattedDate = endsAt
    ? new Date(endsAt).toLocaleDateString()
    : null;
  const formattedTime = endsAt
    ? new Date(endsAt).toLocaleTimeString()
    : null;

  return (
    <MainLayout>
      <style>{`
        @keyframes floatAnim {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        @keyframes moveAcross {
          0% { left: -100px; }
          100% { left: calc(100% + 100px); }
        }
      `}</style>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          {stageImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              style={{
                position: 'absolute',
                width: '100px',
                opacity: 0.6,
                top: `${Math.random() * 80 + 10}%`,
                left: '-100px',
                animation: `moveAcross ${20 + idx * 3}s linear infinite`,
              }}
            />
          ))}
        </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <Confetti />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '500px',
          width: '100%',
          padding: '2rem',
          boxSizing: 'border-box',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: '#fff'
        }}>
          <h1 style={{ color: '#023c6f' }}>{messages.thankYou}</h1>

          {status === 'active' && endsAt ? (
            <>
              <p style={{ fontSize: '1.1rem', color: '#023c6f' }}>
                {messages.activeUntil.replace('{date}', formattedDate).replace('{time}', formattedTime)}
              </p>
              <p style={{ color: '#023c6f' }}>{messages.accessGranted}</p>
            </>
          ) : (
            <p style={{ color: 'crimson' }}>
              {messages.unknownStatus}
            </p>
          )}
          <button
            onClick={() => navigate('/step-by-step')}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#023c6f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Start
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuccessPage;
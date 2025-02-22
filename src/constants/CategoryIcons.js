// src/constants/CategoryIcons.js

// Імпортуємо всі потрібні іконки, які ти перейменував і поклав у папку src/assets/TermsIcons
// Припустимо, у тебе є такий список категорій:

import anatomieWeichteile from '../assets/TermsIcons/anatomie-weichteile.svg';
import anatomieKnochen from '../assets/TermsIcons/anatomie-knochen.svg';
import chirurgie from '../assets/TermsIcons/chirurgie.svg';
import dermatologie from '../assets/TermsIcons/dermatologie.svg';
import endokrinologie from '../assets/TermsIcons/endokrinologie.svg';
import gastroenterologie from '../assets/TermsIcons/gastroenterologie.svg';
import grundlageAnatomie from '../assets/TermsIcons/grundlage-anatomie.svg';
import gynaekologie from '../assets/TermsIcons/gynaekologie.svg';
import haematologie from '../assets/TermsIcons/haematologie.svg';
import hno from '../assets/TermsIcons/hno.svg';
import infektiologiePaediatrie from '../assets/TermsIcons/infektiologie-paediatrie.svg';
import kardiologie from '../assets/TermsIcons/kardiologie.svg';
import medikamente from '../assets/TermsIcons/medikamente.svg';
import nephrologie from '../assets/TermsIcons/nephrologie.svg';
import ophthalmologie from '../assets/TermsIcons/ophthalmologie.svg';
import orthopaedie from '../assets/TermsIcons/orthopaedie.svg';
import pulmologie from '../assets/TermsIcons/pulmologie.svg';
import richtungBewegung from '../assets/TermsIcons/richtung-bewegung.svg';
import nerologie from '../assets/TermsIcons/nerologie.svg';
import zusaetzlich from '../assets/TermsIcons/zusaetzlich.svg';

// Якщо ти хочеш іконку для "Alle":
import alle from '../assets/TermsIcons/alle.svg';

// Створюємо об'єкт, де ключ — це точна назва категорії (як у medicalTerms),
// а значення — імпортована іконка

export const categoryIcons = {
  'Alle': alle, 
  'Anatomie - Weichteile': anatomieWeichteile,
  'Anatomie Knochen': anatomieKnochen,
  'Chirurgie': chirurgie,
  'Dermatologie': dermatologie,
  'Endokrinologie': endokrinologie,
  'Gastroenterologie': gastroenterologie,
  'Grundlage Anatomie': grundlageAnatomie,
  'Gynaekologie': gynaekologie,
  'Haematologie': haematologie,
  'HNO': hno,
  'Infektiologie und Paediatrie': infektiologiePaediatrie,
  'Kardiologie': kardiologie,
  'Medikamente': medikamente,
  'Nephrologie': nephrologie,
  'Ophthalmologie': ophthalmologie,
  'Orthopadie': orthopaedie,
  'Pulmologie': pulmologie,
  'Richtung und Bewegung': richtungBewegung,
  'Neurologie': nerologie,
  'Zusätzlich': zusaetzlich
};
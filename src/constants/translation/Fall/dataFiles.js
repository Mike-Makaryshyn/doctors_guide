import BW_FREIBURG_DATA from './Baden-Württemberg-Freiburg';
import BW_KARLSRUHE_DATA from './Baden-Württemberg-Karlsruhe';
import BW_REUTLINGEN_DATA from './Baden-Württemberg-Reutlingen';
import BW_STUTTGART_DATA from './Baden-Württemberg-Stuttgart';
import BAYERN_DATA from './Bayern';
import BERLIN_DATA from './Berlin';
import BRANDENBURG_DATA from './Brandenburg';
import BREMEN_DATA from './Bremen';
import HAMBURG_DATA from './Hamburg';
import HESSEN_DATA from './Hessen';
import MECKLENBURG_DATA from './Mecklenburg Vorpommern';
import NIEDERSACHSEN_DATA from './Niedersachsen';
import NORDRHEIN_DATA from './Nordrhein-Westfalen';
import RHEINLAND_DATA from './Rheinland-Pfalz';
import SACHSENANHALT_DATA from './Sachsen-Anhalt';
import SACHSEN_DATA from './Sachsen';

const dataFiles = [
  { label: BW_FREIBURG_DATA.regionName, value: 'freiburg', data: BW_FREIBURG_DATA },
  { label: BW_KARLSRUHE_DATA.regionName, value: 'karlsruhe', data: BW_KARLSRUHE_DATA },
  { label: BW_REUTLINGEN_DATA.regionName, value: 'reutlingen', data: BW_REUTLINGEN_DATA },
  { label: BW_STUTTGART_DATA.regionName, value: 'stuttgart', data: BW_STUTTGART_DATA },
  { label: BAYERN_DATA.regionName, value: 'bayern', data: BAYERN_DATA },
  { label: BERLIN_DATA.regionName, value: 'berlin', data: BERLIN_DATA },
  { label: BRANDENBURG_DATA.regionName, value: 'brandenburg', data: BRANDENBURG_DATA },
  { label: BREMEN_DATA.regionName, value: 'bremen', data: BREMEN_DATA },
  { label: HAMBURG_DATA.regionName, value: 'hamburg', data: HAMBURG_DATA },
  { label: HESSEN_DATA.regionName, value: 'hessen', data: HESSEN_DATA },
  { label: MECKLENBURG_DATA.regionName, value: 'mecklenburg-vorpommern', data: MECKLENBURG_DATA },
  { label: NIEDERSACHSEN_DATA.regionName, value: 'niedersachsen', data: NIEDERSACHSEN_DATA },
  { label: NORDRHEIN_DATA.regionName, value: 'nordrhein-westfalen', data: NORDRHEIN_DATA },
  { label: RHEINLAND_DATA.regionName, value: 'rheinland-pfalz', data: RHEINLAND_DATA },
  { label: SACHSENANHALT_DATA.regionName, value: 'sachsen-anhalt', data: SACHSENANHALT_DATA },
  { label: SACHSEN_DATA.regionName, value: 'sachsen', data: SACHSEN_DATA },
];

export default dataFiles;
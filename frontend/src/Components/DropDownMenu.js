import React from 'react'
import { Dropdown, Flag, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { setDate } from '../Redux/actions/yearWeek'
import { getContentShow } from '../Redux/actions/contentShow'

const countryOptions = [
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia'},
  { key: 'br', value: 'br', flag: 'br', text: 'Brazil'},
  { key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria'},
  { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada'},
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile'},
  { key: 'co', value: 'co', flag: 'co', text: 'Colombia'},
  { key: 'cr', value: 'cr', flag: 'cr', text: 'Costa Rica'},
  { key: 'hr', value: 'hr', flag: 'hr', text: 'Croatia'},
  { key: 'cy', value: 'cy', flag: 'cy', text: 'Cyprus'},
  { key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic'},
  { key: 'dk', value: 'dk', flag: 'dk', text: 'Denmark'},
  { key: 'do', value: 'do', flag: 'do', text: 'Dominican Republic'},
  { key: 'ec', value: 'ec', flag: 'ec', text: 'Ecuador'},
  { key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt'},
  { key: 'ee', value: 'ee', flag: 'ee', text: 'Estonia'},
  { key: 'fi', value: 'fi', flag: 'fi', text: 'Finland'},
  { key: 'fr', value: 'fr', flag: 'fr', text: 'France'},
  { key: 'de', value: 'de', flag: 'de', text: 'Germany'},
  { key: 'gr', value: 'gr', flag: 'gr', text: 'Greece'},
  { key: 'gt', value: 'gt', flag: 'gt', text: 'Guatemala'},
  { key: 'hn', value: 'hn', flag: 'hn', text: 'Honduras'},
  { key: 'hk', value: 'hk', flag: 'hk', text: 'Hong-Kong'},
  { key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary'},
  { key: 'is', value: 'is', flag: 'is', text: 'Iceland'},
  { key: 'in', value: 'in', flag: 'in', text: 'India'},
  { key: 'id', value: 'id', flag: 'id', text: 'Indonesia'},
  { key: 'ie', value: 'ie', flag: 'ie', text: 'Ireland'},
  { key: 'il', value: 'il', flag: 'il', text: 'Israel'},
  { key: 'it', value: 'it', flag: 'it', text: 'Italy'},
  { key: 'jm', value: 'jm', flag: 'jm', text: 'Jamaica'},
  { key: 'jp', value: 'jp', flag: 'jp', text: 'Japan'},
  { key: 'jo', value: 'jo', flag: 'jo', text: 'Jordan'},
  { key: 'kw', value: 'kw', flag: 'kw', text: 'Kuwait'},
  { key: 'lv', value: 'lv', flag: 'lv', text: 'Latvia'},
  { key: 'lb', value: 'lb', flag: 'lb', text: 'Lebanon'},
  { key: 'lt', value: 'lt', flag: 'lt', text: 'Lithuania'},
  { key: 'lu', value: 'lu', flag: 'lu', text: 'Luxembourg'},
  { key: 'my', value: 'my', flag: 'my', text: 'Malaysia'},
  { key: 'mt', value: 'mt', flag: 'mt', text: 'Malta'},
  { key: 'mx', value: 'mx', flag: 'mx', text: 'Mexico'},
  { key: 'ma', value: 'ma', flag: 'ma', text: 'Morocco'},
  { key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands'},
  { key: 'nz', value: 'nz', flag: 'nz', text: 'New Zealand'},
  { key: 'ni', value: 'ni', flag: 'ni', text: 'Nicaragua'},
  { key: 'ng', value: 'ng', flag: 'ng', text: 'Nigeria'},
  { key: 'no', value: 'no', flag: 'no', text: 'Norway'},
  { key: 'om', value: 'om', flag: 'om', text: 'Oman'},
  { key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan'},
  { key: 'pa', value: 'pa', flag: 'pa', text: 'Panama'},
  { key: 'py', value: 'py', flag: 'py', text: 'Paraguay'},
  { key: 'pe', value: 'pe', flag: 'pe', text: 'Peru'},
  { key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines'},
  { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland'},
  { key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal'},
  { key: 'qa', value: 'qa', flag: 'qa', text: 'Qatar'},
  { key: 'ro', value: 'ro', flag: 'ro', text: 'Romania'},
  { key: 'ru', value: 'ru', flag: 'ru', text: 'Russia'},
  { key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia'},
  { key: 'rs', value: 'rs', flag: 'rs', text: 'Serbia'},
  { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore'},
  { key: 'sk', value: 'sk', flag: 'sk', text: 'Slovakia'},
  { key: 'si', value: 'si', flag: 'si', text: 'Slovenia'},
  { key: 'za', value: 'za', flag: 'za', text: 'South Africa'},
  { key: 'kr', value: 'kr', flag: 'kr', text: 'South Korea'},
  { key: 'es', value: 'es', flag: 'es', text: 'Spain'},
  { key: 'lk', value: 'lk', flag: 'lk', text: 'Sri Lanka'},
  { key: 'se', value: 'se', flag: 'se', text: 'Sweden'},
  { key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland'},
  { key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan'},
  { key: 'th', value: 'th', flag: 'th', text: 'Thailand'},
  { key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey'},
  { key: 'ua', value: 'ua', flag: 'ua', text: 'Ukraine'},
  { key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates'},
  { key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom'},
  { key: 'us', value: 'us', flag: 'us', text: 'United States'},
  { key: 'uy', value: 'uy', flag: 'uy', text: 'Uruguay'},
  { key: 've', value: 've', flag: 've', text: 'Venezuela'},
  { key: 'vn', value: 'vn', flag: 'vn', text: 'Vietnam'},

]

const DropDownMenu = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const clickhandler = (e, {value, nation}) => {
    console.log(value, nation)
    
    dispatch(setDate({
      'year': '2021', 
      'week': '39',
      'date': 'Sep 27 - Oct 3',
    }));
    dispatch(getContentShow({nationCode: value,week: '2021-039'}));
    history.push(`/timeLine/nationInfo?nation=${nation}&nationCode=${value}`);
  }

  return(
    <Menu compact style={{float: 'right' , marginRight: '30px', cursor: 'pointer', marginTop: '20px'}} >
      <Dropdown item text='Select Country'>
        <Dropdown.Menu>
          <Dropdown.Item value="ar" nation="Argentina" onClick={clickhandler}><Flag name='ar' />Argentina</Dropdown.Item>
          <Dropdown.Item value="au" nation="Australia" onClick={clickhandler}><Flag name='au' />Vietnam</Dropdown.Item>
          <Dropdown.Item value="vn" nation="Australia" onClick={clickhandler}><Flag name='vn' />Vietnam</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
)}


export default DropDownMenu;
import React from 'react'
import { Dropdown, Flag, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { setDate } from '../Redux/actions/yearWeek'
import { getContentShow } from '../Redux/actions/contentShow'

const DropDownMenu = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const clickhandler = (e, {value, nation}) => {
    console.log(value, nation)
    
    // dispatch(setDate({
    //   'year': '2021', 
    //   'week': '39',
    //   'date': 'Sep 27 - Oct 3',
    // }));
    // dispatch(getContentShow({nationCode: value,week: '2021-039'}));
    history.push(`/GenreAnalysis/nationInfo?nation=${nation}&nationCode=${value}`);
  }

  return(
    <Menu compact style={{float: 'right' , marginRight: '30px', cursor: 'pointer', marginTop: '20px'}} >
      <Dropdown selection item text='Select Country'>
        <Dropdown.Menu>
          <Dropdown.Item value="ar" nation="Argentina" onClick={clickhandler}>
            <Flag name="ar" />
            Argentina
          </Dropdown.Item>
          <Dropdown.Item value="au" nation="Australia" onClick={clickhandler}>
            <Flag name="au" />
            Australia
          </Dropdown.Item>
          <Dropdown.Item value="at" nation="Austria" onClick={clickhandler}>
            <Flag name="at" />
            Austria
          </Dropdown.Item>
          <Dropdown.Item value="bd" nation="Bangladesh" onClick={clickhandler}>
            <Flag name="bd" />
            Bangladesh
          </Dropdown.Item>
          <Dropdown.Item value="be" nation="Belgium" onClick={clickhandler}>
            <Flag name="be" />
            Belgium
          </Dropdown.Item>
          <Dropdown.Item value="bo" nation="Bolivia" onClick={clickhandler}>
            <Flag name="bo" />
            Bolivia
          </Dropdown.Item>
          <Dropdown.Item value="bg" nation="Bulgaria" onClick={clickhandler}>
            <Flag name="bg" />
            Bulgaria
          </Dropdown.Item>
          <Dropdown.Item value="ca" nation="Canada" onClick={clickhandler}>
            <Flag name="ca" />
            Canada
          </Dropdown.Item>
          <Dropdown.Item value="cl" nation="Chile" onClick={clickhandler}>
            <Flag name="cl" />
            Chile
          </Dropdown.Item>
          <Dropdown.Item value="co" nation="Colombia" onClick={clickhandler}>
            <Flag name="co" />
            Colombia
          </Dropdown.Item>
          <Dropdown.Item value="cr" nation="Costa Rica" onClick={clickhandler}>
            <Flag name="cr" />
            Costa Rica
          </Dropdown.Item>
          <Dropdown.Item value="hr" nation="Croatia" onClick={clickhandler}>
            <Flag name="hr" />
            Croatia
          </Dropdown.Item>
          <Dropdown.Item value="cy" nation="Cyprus" onClick={clickhandler}>
            <Flag name="cy" />
            Cyprus
          </Dropdown.Item>
          <Dropdown.Item
            value="cz"
            nation="Czech Republic"
            onClick={clickhandler}
          >
            <Flag name="cz" />
            Czech Republic
          </Dropdown.Item>
          <Dropdown.Item value="dk" nation="Denmark" onClick={clickhandler}>
            <Flag name="dk" />
            Denmark
          </Dropdown.Item>
          <Dropdown.Item
            value="do"
            nation="Dominican Republic"
            onClick={clickhandler}
          >
            <Flag name="do" />
            Dominican Republic
          </Dropdown.Item>
          <Dropdown.Item value="ec" nation="Ecuador" onClick={clickhandler}>
            <Flag name="ec" />
            Ecuador
          </Dropdown.Item>
          <Dropdown.Item value="eg" nation="Egypt" onClick={clickhandler}>
            <Flag name="eg" />
            Egypt
          </Dropdown.Item>
          <Dropdown.Item value="ee" nation="Estonia" onClick={clickhandler}>
            <Flag name="ee" />
            Estonia
          </Dropdown.Item>
          <Dropdown.Item value="fi" nation="Finland" onClick={clickhandler}>
            <Flag name="fi" />
            Finland
          </Dropdown.Item>
          <Dropdown.Item value="fr" nation="France" onClick={clickhandler}>
            <Flag name="fr" />
            France
          </Dropdown.Item>
          <Dropdown.Item value="de" nation="Germany" onClick={clickhandler}>
            <Flag name="de" />
            Germany
          </Dropdown.Item>
          <Dropdown.Item value="gr" nation="Greece" onClick={clickhandler}>
            <Flag name="gr" />
            Greece
          </Dropdown.Item>
          <Dropdown.Item value="gt" nation="Guatemala" onClick={clickhandler}>
            <Flag name="gt" />
            Guatemala
          </Dropdown.Item>
          <Dropdown.Item value="hn" nation="Honduras" onClick={clickhandler}>
            <Flag name="hn" />
            Honduras
          </Dropdown.Item>
          <Dropdown.Item value="hk" nation="Hong-Kong" onClick={clickhandler}>
            <Flag name="hk" />
            Hong-Kong
          </Dropdown.Item>
          <Dropdown.Item value="hu" nation="Hungary" onClick={clickhandler}>
            <Flag name="hu" />
            Hungary
          </Dropdown.Item>
          <Dropdown.Item value="is" nation="Iceland" onClick={clickhandler}>
            <Flag name="is" />
            Iceland
          </Dropdown.Item>
          <Dropdown.Item value="id" nation="Indonesia" onClick={clickhandler}>
            <Flag name="id" />
            Indonesia
          </Dropdown.Item>
          <Dropdown.Item value="ie" nation="Ireland" onClick={clickhandler}>
            <Flag name="ie" />
            Ireland
          </Dropdown.Item>
          <Dropdown.Item value="il" nation="Israel" onClick={clickhandler}>
            <Flag name="il" />
            Israel
          </Dropdown.Item>
          <Dropdown.Item value="it" nation="Italy" onClick={clickhandler}>
            <Flag name="it" />
            Italy
          </Dropdown.Item>
          <Dropdown.Item value="jm" nation="Jamaica" onClick={clickhandler}>
            <Flag name="jm" />
            Jamaica
          </Dropdown.Item>
          <Dropdown.Item value="jp" nation="Japan" onClick={clickhandler}>
            <Flag name="jp" />
            Japan
          </Dropdown.Item>
          <Dropdown.Item value="jo" nation="Jordan" onClick={clickhandler}>
            <Flag name="jo" />
            Jordan
          </Dropdown.Item>
          <Dropdown.Item value="kw" nation="Kuwait" onClick={clickhandler}>
            <Flag name="kw" />
            Kuwait
          </Dropdown.Item>
          <Dropdown.Item value="lv" nation="Latvia" onClick={clickhandler}>
            <Flag name="lv" />
            Latvia
          </Dropdown.Item>
          <Dropdown.Item value="lb" nation="Lebanon" onClick={clickhandler}>
            <Flag name="lb" />
            Lebanon
          </Dropdown.Item>
          <Dropdown.Item value="lt" nation="Lithuania" onClick={clickhandler}>
            <Flag name="lt" />
            Lithuania
          </Dropdown.Item>
          <Dropdown.Item value="cy" nation="Cyprus" onClick={clickhandler}>
            <Flag name="cy" />
            Cyprus
          </Dropdown.Item>
          <Dropdown.Item value="lu" nation="Luxembourg" onClick={clickhandler}>
            <Flag name="lu" />
            Luxembourg
          </Dropdown.Item>
          <Dropdown.Item value="my" nation="Malaysia" onClick={clickhandler}>
            <Flag name="my" />
            Malaysia
          </Dropdown.Item>
          <Dropdown.Item value="mt" nation="Malta" onClick={clickhandler}>
            <Flag name="mt" />
            Malta
          </Dropdown.Item>
          <Dropdown.Item value="mx" nation="Mexico" onClick={clickhandler}>
            <Flag name="mx" />
            Mexico
          </Dropdown.Item>
          <Dropdown.Item value="ma" nation="Morocco" onClick={clickhandler}>
            <Flag name="ma" />
            Morocco
          </Dropdown.Item>
          <Dropdown.Item value="nl" nation="Netherlands" onClick={clickhandler}>
            <Flag name="nl" />
            Netherlands
          </Dropdown.Item>
          <Dropdown.Item value="nz" nation="New Zealand" onClick={clickhandler}>
            <Flag name="nz" />
            New Zealand
          </Dropdown.Item>
          <Dropdown.Item value="ni" nation="Nicaragua" onClick={clickhandler}>
            <Flag name="ni" />
            Nicaragua
          </Dropdown.Item>
          <Dropdown.Item value="ng" nation="Nigeria" onClick={clickhandler}>
            <Flag name="ng" />
            Nigeria
          </Dropdown.Item>
          <Dropdown.Item value="no" nation="Norway" onClick={clickhandler}>
            <Flag name="no" />
            Norway
          </Dropdown.Item>
          <Dropdown.Item value="om" nation="Oman" onClick={clickhandler}>
            <Flag name="om" />
            Oman
          </Dropdown.Item>
          <Dropdown.Item value="pk" nation="Pakistan" onClick={clickhandler}>
            <Flag name="pk" />
            Pakistan
          </Dropdown.Item>
          <Dropdown.Item value="pa" nation="Panama" onClick={clickhandler}>
            <Flag name="pa" />
            Panama
          </Dropdown.Item>
          <Dropdown.Item value="py" nation="Paraguay" onClick={clickhandler}>
            <Flag name="py" />
            Paraguay
          </Dropdown.Item>
          <Dropdown.Item value="pe" nation="Peru" onClick={clickhandler}>
            <Flag name="pe" />
            Peru
          </Dropdown.Item>
          <Dropdown.Item value="ph" nation="Philippines" onClick={clickhandler}>
            <Flag name="ph" />
            Philippines
          </Dropdown.Item>
          <Dropdown.Item value="pl" nation="Poland" onClick={clickhandler}>
            <Flag name="pl" />
            Poland
          </Dropdown.Item>
          <Dropdown.Item value="pt" nation="Portugal" onClick={clickhandler}>
            <Flag name="pt" />
            Portugal
          </Dropdown.Item>
          <Dropdown.Item value="qa" nation="Qatar" onClick={clickhandler}>
            <Flag name="qa" />
            Qatar
          </Dropdown.Item>
          <Dropdown.Item value="ro" nation="Romania" onClick={clickhandler}>
            <Flag name="ro" />
            Romania
          </Dropdown.Item>
          <Dropdown.Item value="ru" nation="Russia" onClick={clickhandler}>
            <Flag name="ru" />
            Russia
          </Dropdown.Item>
          <Dropdown.Item
            value="sa"
            nation="Saudi Arabia"
            onClick={clickhandler}
          >
            <Flag name="sa" />
            Saudi Arabia
          </Dropdown.Item>
          <Dropdown.Item value="rs" nation="Serbia" onClick={clickhandler}>
            <Flag name="rs" />
            Serbia
          </Dropdown.Item>
          <Dropdown.Item value="sg" nation="Singapore" onClick={clickhandler}>
            <Flag name="sg" />
            Singapore
          </Dropdown.Item>
          <Dropdown.Item value="sk" nation="Slovakia" onClick={clickhandler}>
            <Flag name="sk" />
            Slovakia
          </Dropdown.Item>
          <Dropdown.Item value="si" nation="Slovenia" onClick={clickhandler}>
            <Flag name="si" />
            Slovenia
          </Dropdown.Item>
          <Dropdown.Item
            value="za"
            nation="South Africa"
            onClick={clickhandler}
          >
            <Flag name="za" />
            South Africa
          </Dropdown.Item>
          <Dropdown.Item value="kr" nation="South Korea" onClick={clickhandler}>
            <Flag name="kr" />
            South Korea
          </Dropdown.Item>
          <Dropdown.Item value="es" nation="Spain" onClick={clickhandler}>
            <Flag name="es" />
            Spain
          </Dropdown.Item>
          <Dropdown.Item value="lk" nation="Sri Lanka" onClick={clickhandler}>
            <Flag name="lk" />
            Sri Lanka
          </Dropdown.Item>
          <Dropdown.Item value="se" nation="Sweden" onClick={clickhandler}>
            <Flag name="se" />
            Sweden
          </Dropdown.Item>
          <Dropdown.Item value="ch" nation="Switzerland" onClick={clickhandler}>
            <Flag name="ch" />
            Switzerland
          </Dropdown.Item>
          <Dropdown.Item value="tw" nation="Taiwan" onClick={clickhandler}>
            <Flag name="tw" />
            Taiwan
          </Dropdown.Item>
          <Dropdown.Item value="th" nation="Thailand" onClick={clickhandler}>
            <Flag name="th" />
            Thailand
          </Dropdown.Item>
          <Dropdown.Item value="tr" nation="Turkey" onClick={clickhandler}>
            <Flag name="tr" />
            Turkey
          </Dropdown.Item>
          <Dropdown.Item value="ua" nation="Ukraine" onClick={clickhandler}>
            <Flag name="ua" />
            Ukraine
          </Dropdown.Item>
          <Dropdown.Item
            value="ae"
            nation="United Arab Emirates"
            onClick={clickhandler}
          >
            <Flag name="ae" />
            United Arab Emirates
          </Dropdown.Item>
          <Dropdown.Item
            value="gb"
            nation="United Kingdom"
            onClick={clickhandler}
          >
            <Flag name="gb" />
            United Kingdom
          </Dropdown.Item>
          <Dropdown.Item
            value="us"
            nation="United States"
            onClick={clickhandler}
          >
            <Flag name="us" />
            United States
          </Dropdown.Item>
          <Dropdown.Item value="uy" nation="Uruguay" onClick={clickhandler}>
            <Flag name="uy" />
            Uruguay
          </Dropdown.Item>
          <Dropdown.Item value="ve" nation="Venezuela" onClick={clickhandler}>
            <Flag name="ve" />
            Venezuela
          </Dropdown.Item>
          <Dropdown.Item value="vn" nation="Vietnam" onClick={clickhandler}>
            <Flag name="vn" />
            Vietnam
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
)}


export default DropDownMenu;
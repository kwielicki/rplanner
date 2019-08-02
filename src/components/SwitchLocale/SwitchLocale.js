// import React from 'react'
// import { connect } from 'react-redux'
// import { updateIntl } from 'react-intl-redux'

// import store from '../../store'

// import messages_pl from "../../translations/pl.json"
// import messages_en from "../../translations/en.json"

// const UPDATE_LOCALES = 'UPDATE_LOCALES'

// const handleLoadlLocales = () => {
//   store.dispatch({
//     type: UPDATE_LOCALES,
//     payload: {
//       en: messages_en,
//       pl: messages_pl
//     },
//   })
// }

// handleLoadlLocales()
// const SwitchLocale = connect(state => ({
//   currentLocale: state.intl.locale,
//   locales: state.locales,
// }))(({ currentLocale, locales }) => (
//   <select
//     value={currentLocale}
//     onChange={e =>
//       store.dispatch(
//         updateIntl({
//           locale: e.target.value,
//           messages: locales[e.target.value],
//         })
//       )
//     }
//   >
//     {Object.keys(locales).map(locale => (
//       <option key={locale}>{locale}</option>
//     ))}
//   </select>
// ))

// export default SwitchLocale
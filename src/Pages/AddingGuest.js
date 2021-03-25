import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import AddingGuestForm from 'Components/AddingGuestForm'
import { translationText } from 'Utils/translationText'
import translations from 'Translations/translations.json'

const AddingGuest = () => {
  const [translation, setTranslation] = useState({});

  useEffect(() => {
    setTranslation(translations.addingGuest)
  }, []);

  return (
    <>
      <Helmet title={translationText(translation, 'pageTitle')}/>

      <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
      <BreadcrumbsItem to='/adding-guest'>{translationText(translation, 'pageTitle')}</BreadcrumbsItem>

      <Container>
        <Column xs='1'>
          <PageTitle
            supTitle={translationText(translation, 'pageTitle')}
            subTitle={translationText(translation, 'pageDescription')}
          />
        </Column>
      </Container>

      <Container>
        <Column xs='1'>
          <AddingGuestForm/>
        </Column>
      </Container>
    </>
  )
}

export default AddingGuest

import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'
import OpenWeather from 'Components/OpenWeather'
import Card from 'Components/UI/Card'
import Swiper from 'Components/UI/Swiper'
import ShadowedBox from 'Components/UI/ShadowedBox'

class Dashboard extends React.Component {

    state = {
        translations: {
            pageTitle: translations.dashboard.pageTitle
        }
    }

    render() {
        const {
            pageTitle
        } = this.state.translations

        return (
            <>
                <Helmet title='Dashboard'/>
                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>

                <Container>
                    <Column xs='1'>
                        <PageTitle supTitle={pageTitle.supTitle}
                                subTitle={pageTitle.subTitle}/>
                    </Column>
                    <Column xs='1' spacerBottom='30'>
                        <Swiper>
                            <Card href='/documentation'
                                  title='To work best with the Wedding Planner application, use the documentation.'
                                  header='Learn your app'
                                  description='Wedding Planner documentation prepared especially for you will open all the necessary issues 
                                               for you to plan events efficiently.'
                                  label='Getting started'
                                  sub='step by step'></Card>
                            <Card href='/available-modules'
                                  title='Modules allow you to manage the guest list, check statistics, organize notes and much more.'
                                  header='Manage your modules'
                                  description='Learn how to use the most important modules.'
                                  label='Learn modules'></Card>
                            <Card href='/contact-us'
                                  title='Dashboard'
                                  header='Contact us'
                                  description='If you have an idea to improve your application, let us know.'
                                  label='Write to us with your idea'></Card>
                            <Card href='/authors'
                                  title='Meet the authors of the application Wedding Planner.'
                                  header='Authors'
                                  description='If you are interested, check Who is responsible for creating the Wedding Planner application.'
                                  label='Meet the authors'></Card>
                        </Swiper>
                    </Column>
                    <Column xs='1' xl='2'>
                        <OpenWeather></OpenWeather>
                    </Column>
                    <Column xs='1' xl='2'>
                        <ShadowedBox>Recently added guests will appear here. This amount will be configurable from the admin level.</ShadowedBox>
                    </Column>
                </Container>
            </>
        )
    }
}

export default Dashboard
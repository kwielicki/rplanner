import React from 'react'
import { Helmet } from 'react-helmet'
import Accordion from 'Components/Accordion'
import AccordionItem from 'Components/Accordion/AccordionItem'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'
import { Link } from 'react-router-dom'

class Faq extends React.Component {

    state = {
        translations: {
            pageTitle: translations.faq.pageTitle
        }
    }

    render() {
        const {
            pageTitle
        } = this.state.translations
        return (
            <>
                <Helmet>
                    <title>Faq</title>
                </Helmet>
                <Container>
                    <Column xs='1'>
                        <PageTitle supTitle={pageTitle.supTitle}
                                subTitle={pageTitle.subTitle}/>
                        <Accordion style='wide'>
                            <AccordionItem header='What is the purpose of the application?'>
                                <p>
                                    The Wedding Planner application was created for people 
                                    who want to plan their wedding perfectly.
                                </p>
                                <p>
                                    Starting from pre-wedding shopping, to preparing the guest list, 
                                    and ending with the advanced cost organization system. A very useful feature 
                                    is the ability to check guest statistics. They allow you to analyze 
                                    the list of people from their affiliation and ending with status.
                                </p>
                            </AccordionItem>
                            <AccordionItem header='How to add a new guest?'>
                                <p>
                                    To add a guest to the database, use the registration form, 
                                    which is located in the <Link to="/adding-guest">Add new Guest</Link> view, 
                                    or use the main application.
                                </p>
                            </AccordionItem>
                            <AccordionItem header='Can I edit the guest details?'>
                                <p>Yes, you can...</p>
                            </AccordionItem>
                        </Accordion>
                    </Column>
                </Container>
            </>
            
        )
    }
}

export default Faq

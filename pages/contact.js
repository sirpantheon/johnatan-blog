import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';
import ContactSimple from '../components/contact/contact-simple';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contato</title>
        <meta name='description' content='Meus meios de contato!' />
      </Head>
      <ContactSimple />
    </Fragment>
  );
}

export default ContactPage;

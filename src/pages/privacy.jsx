import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function Login() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Extra Dough</title>
      </Head>
      <Header />
      <main>
        <Container className="max-w-2 relative">
          <div className="prose mx-auto">
            <h1>Extra Dough - Privacy Policy</h1>
            <p className="text-xl text-slate-600">
              Effective Date: 1 August 2022
            </p>
            <p>You should read this entire Privacy Policy.</p>
            <p>
              Extra Dough, LLC built the Extra Dough app (the “App”) as a free
              app. The App connects people who want to sell baked goods
              (“Bakers”) with people seeking to purchase locally made home baked
              goods (“Customers”). The App also connects delivery opportunities
              with local independent delivery drivers (“Drivers”). The services
              of connecting Bakers with Customers and delivery opportunities
              with Drivers (collectively the “Service”) is provided by Extra
              Dough, LLC at no cost to Customers or Drivers and is intended for
              use as is. Bakers shall pay a monthly fee for the Services. All
              persons, inclusive of Bakers, Customers, and Drivers (the “Users”)
              who use the Extra Dough website (the “Website”) or the App agree
              to this privacy policy (the “Privacy Policy”).
            </p>
            <p>
              This page is used to inform visitors regarding Extra Dough’s
              policies with the collection, use, and disclosure of Personal
              Information provided to Extra Dough by Bakers, Customers, and
              Drivers during the use of the Service.
            </p>
            <p>
              By using the Service, you agree to the collection and use of
              information in relation to this policy. The Personal Information
              collected is used for improving and/or facilitating the Service.
              Extra Dough will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in
              the Extra Dough Terms and Conditions, which is accessible from the
              Profile Screen.
            </p>
            <p>
              Your access to and use of the Extra Dough services are subject to
              the various Independent Contractor Agreements, which are
              accessible from the Profile Screen.
            </p>
            <h3>Information Collection and Use</h3>
            <p>
              For a better experience, while using the Service, Extra Dough may
              require Users to provide certain personally identifiable
              information, including but not limited to a name, phone number,
              payment information, and delivery addresses. The information
              requested will be retained by Extra Dough and used as described in
              this privacy policy. The use of such information shall be limited
              to purposes directly related to providing Services. Delivery
              Addresses shall be used solely for the purpose of facilitating
              deliveries as requested by Users. Personally identifiable
              information shall be used only to facilitate deliveries to Users.
              Phone numbers shall be used only in the event a User must be
              contacted in order to facilitate a delivery to the User. You
              consent to the use of your phone number by an independent
              contractor delivery driver in the event a delivery driver is
              unable to locate a delivery address.
            </p>
            <h3>Cookies</h3>
            <p>
              Cookies are packets of data sent by a web server to a browser,
              which are returned by the browser each time it subsequently
              accesses the same server, used to identify the user or track their
              access to the server. These are sent to your browser from the
              websites that you visit and are stored on your device&apos;s
              internal memory.
            </p>
            <p>
              This Service does not use these “cookies” explicitly. However, the
              App may use third party code and libraries that use “cookies” to
              collect information and improve their services. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your device. If you choose to refuse our
              cookies, you may not be able to use some portions of the Service.
            </p>
            <h3>Service Providers</h3>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul>
              <li>
                <p>To facilitate the Service;</p>
              </li>
              <li>
                <p>To provide the Service on our behalf; or</p>
              </li>
              <li>
                <p>
                  To assist Extra Dough in analyzing how the Service is used.
                </p>
              </li>
            </ul>
            <p>
              Third Parties that assist Extra Dough in providing the Service
              have access to your Personal Information. The Third Parties that
              Extra Dough has partnered with to provide the Service require
              certain Personal Information in order to provide all of the many
              services that are available through the Users’ use of the App and
              the Website. However, Extra Dough’s contracted Third-Party
              Partners are obligated not to disclose or use the Personal
              Information for any other purpose.
            </p>
            <h3>Security</h3>
            <p>
              Extra Dough values your trust in providing Extra Dough your
              Personal Information. Extra Dough strives to use commercially
              acceptable means of protecting all Users’ Personal Information.
              But remember that no method of transmission over the internet, or
              method of electronic storage is 100% secure and reliable, and
              Extra Dough cannot guarantee its absolute security.
            </p>
            <h3>Links to Other Sites</h3>
            <p>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Each of these
              third-party websites contains its own privacy policy. Extra Dough
              has no control over and assumes no responsibility for the content,
              privacy policies, or practices of any third-party websites or
              services.
            </p>
            <h3>Children’s Privacy</h3>
            <p>
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13. In the case we discover that a child under 13
              has provided us with personal information, we immediately delete
              this from our servers. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us at{' '}
              <a href="mailto:support@extradough.io">support@extradough.io</a>{' '}
              so that we will be able to delete all such personally identifiable
              information.
            </p>
            <h3>Changes to This Privacy Policy</h3>
            <p>
              Extra Dough may update its Privacy Policy from time to time. Extra
              Dough is not responsible to notify the Users of updates to the
              Privacy Policy. Instead, Users are responsible for reading and
              understanding the Privacy Policy. Each time a User provides any
              information to Extra Dough, the User shall be responsible for
              knowing and understanding the Privacy Policy in effect at the time
              the User provides such information to Extra Dough. These changes
              are effective immediately after they are posted on this page.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at{' '}
              <a href="mailto:support@extradough.io">support@extradough.io</a>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

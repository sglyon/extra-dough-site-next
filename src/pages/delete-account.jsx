import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import Head from 'next/head'
import { Header } from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import imageDelete1 from '@/images/screenshots/delete-1.png'
import imageDelete2 from '@/images/screenshots/delete-2.png'
import imageDelete3 from '@/images/screenshots/delete-3.png'

const DeleteAccountPage = () => {
  return (
    <>
      <Head>
        <title>Delete Account | Extra Dough</title>
      </Head>
      <Header />
      <main>
        <Container className="max-w-2 relative">
          <div className="prose mx-auto">
            <h1>Delete Account</h1>
            <p>To delete your account, please follow the steps below:</p>
            <ol>
              <li>
                <h2>Navigate to Profile Screen</h2>
                <p>
                  Using the bottom tab bar in the Extra Dough app, select the
                  'Profile' or middle icon. It should look similar to the below
                  screenshot.
                </p>
                <Image
                  src={imageDelete1}
                  alt="Navigate to the profile screen in the Extra Dough mobile app."
                />
              </li>
              <li>
                <h2>Press Delete Account</h2>
                <p>
                  On the Profile Screen, press the 'Delete Account' button. It
                  should raise an alert asking you to confirm your decision as
                  indicated in the below screenshot.
                </p>
                <Image
                  src={imageDelete2}
                  alt="Press Delete account on the profile screen in the Extra Dough mobile app and confirm on the resulting alert."
                />
              </li>
              <li>
                <h2>Verify the Request was Recieved</h2>
                <p>
                  After confirming the deletion of your account, you should see
                  a screen similar to the below screenshot. You may choose to
                  cancel the delete request if submitted in error by pressing
                  the 'Cancel delete request' button. Otherwise, the delete
                  request will remain in a pending state until an admin approves
                  the request. Once approved, your account and data will be
                  deleted and you will be logged out of the app.
                </p>
                <Image
                  src={imageDelete3}
                  alt="Visibly confirm your account deletion request on the profile screen in the Extra Dough mobile app."
                />
              </li>
            </ol>
          </div>
        </Container>
      </main>
    </>
  )
}

export default DeleteAccountPage

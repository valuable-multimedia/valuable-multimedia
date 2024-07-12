"use client";

import Link from "next/link";
import React from "react";

function PrivacyPolicyPage() {
  return (
    <div>
      {/* banner  */}
      <div className="banner px-16 bg-[#000] text-white py-10 text-center">
        <h1 className="capitalize text-5xl font-semibold">privacy policy</h1>
      </div>

      <div className="content flex flex-col gap-y-10 px-[10rem] py-16">
        <p>
          By viewing, using, or otherwise interacting with the website located
          at http://www.valuablemultimedia.com (the &quot;Valuable
          Multimedia&quot;) or submitting any information to us in response to
          the valuable multimedia Website, you agree to the application of this
          Privacy Policy (the &quot;Policy&quot;). If you do not agree with the
          Policy, please do not use the Valuable Multimedia Website or submit
          any information to us.
        </p>

        <ul className="bullets flex flex-col gap-y-2 pl-4">
          <li>
            We collect information from you when you register on our site,
            subscribe to our newsletter, respond to a survey or fill out a form.
          </li>
          <li>
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your: name, e-mail address, mailing address or phone
            number.
          </li>
          <li>
            What do we use your information for?
            <ul className="bullets pl-6 flex flex-col gap-y-2 mt-2">
              <li>
                To improve customer service Information you provide helps us
                respond to your customer service requests and support needs more
                efficiently.
              </li>
              <li>
                To personalize user experience We may use information in the
                aggregate to understand how our Users as a group use the
                services and resources provided on our Site.
              </li>
              <li>
                To improve our Site We may use feedback you provide to improve
                our products and services.
              </li>
              <li>
                To process payments We may use the information Users provide
                about themselves when placing an order only to provide service
                to that order. We do not share this information with outside
                parties except to the extent necessary to provide the service.
              </li>
              <li>
                To send periodic emails We may use the email address to send
                User information and updates pertaining to their order. It may
                also be used to respond to their inquiries, questions, and/or
                other requests. If User decides to opt-in to our mailing list,
                they will receive emails that may include company news, updates,
                related product or service information, etc. If at any time the
                User would like to unsubscribe from receiving future emails, we
                include detailed unsubscribe instructions at the bottom of each
                email or User may contact us via our Site.
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">
            How we protect your information
          </h2>

          <ul className="flex flex-col gap-y-3">
            <li>
              We adopt appropriate data collection, storage and processing
              practices and security measures to protect against unauthorized
              access, alteration, disclosure or destruction of your personal
              information, username, password, transaction information and data
              stored on our Site.
            </li>

            <li>
              Sensitive and private data exchange between the Site and its Users
              happens over a SSL secured communication channel and is encrypted
              and protected with digital signatures.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">
            Sharing your personal information
          </h2>

          <ul className="flex flex-col gap-y-3">
            <li>
              We do not sell, trade, or rent Users personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding visitors and users with our business partners, trusted
              affiliates and advertisers for the purposes outlined above.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">
            Compliance with children&apos;s online privacy protection act
          </h2>

          <ul className="flex flex-col gap-y-3">
            <li>
              Protecting the privacy of the very young is especially important.
              For that reason, we never collect or maintain information at our
              Site from those we actually know are under 13, and no part of our
              website is structured to attract anyone under 13.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">
            Changes to this privacy policy
          </h2>

          <ul className="flex flex-col gap-y-3">
            <li>
              Valuable Multimedia has the discretion to update this privacy
              policy at any time. When we do, we will revise the updated date at
              the bottom of this page. We encourage Users to frequently check
              this page for any changes to stay informed about how we are
              helping to protect the personal information we collect. You
              acknowledge and agree that it is your responsibility to review
              this privacy policy periodically and become aware of
              modifications.
            </li>
            <li>
              <span className="font-semibold">Note :</span>
              If at any time you would like to unsubscribe from receiving future
              emails, we include detailed unsubscribe instructions at the bottom
              of each email.
            </li>
            <li>
              If you have any questions about Policy, please contact us by email
              <Link
                href={"mailto:info@valuablemultimedia.com"}
                className="pl-1 font-semibold"
              >
                info@valuablemultimedia.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;

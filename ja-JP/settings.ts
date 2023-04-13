export default {
  settings: {
    account: 'My Account',
    profile: 'Profile',
    resetPassword: 'Security',
    save: 'Save',
    editSuccess: 'Your profile has been successfully updated',
    titleProfile: 'Profile',
    titleSecurity: 'Security',
    delete: {
      title: 'Delete Account',
      profileCard: {
        title: 'Delete Account',
        description: 'You will submit a deletion request and lose access to EMQX products.',
        btn: 'Delete',
      },
      requirements: `<h2 class="mb-3 is-size-5">Requirements</h2>
      <p class="mb-3 tip">Review and ensure that you meet the following conditions before proceeding.</p>
      <ul>
        <li>I'm sure I've deleted all deployments under this account.</li>
        <li>I'm sure I've deleted all value-added services under this account.</li>
        <li>
          I'm sure there is no outstanding payment (including the outstanding unpaid balance and the payment
          not yet billed of current month) under this account.
        </li>
      </ul>
      <p class="tip">
        Refer to our
        <a class="is-text-primary" href="https://docs.emqx.com/en/cloud/latest/faq/delete_account.html" target="_blank" rel="noopener noreferrer">documentation</a>
        for detailed instructions on how to complete these requirements.
      </p>`,
      acknowledgements: {
        title: 'Acknowledgements',
        list: [
          'I understand that once my EMQX account is deleted, I will no longer be able to sign in.',
          'I understand that I will no longer be able to register a new EMQX account with the same email address.',
          'I understand that once my EMQX account is deleted, all of my data, sub-accounts, projects will be permanently erased.',
          'I understand that once I submit my account deletion request, I will no longer have access to my EMQX account.',
          'I understand that once my EMQX account is deleted, I will no longer be able to download or request an invoice.',
        ],
        next: 'Next',
        cancle: 'Cancel',
      },
      error: {
        title: 'Please resolve the following issue(s) before proceeding with account deletion:',
        billing: 'Billed usage accrued so far needs to be issued and paid.',
        deployment: 'There are still depolyment(s) remains.',
        service: 'There are still value-added service(s) remains.',
        unclear: 'There are still outstanding payment(s) remains.',
      },
      feedback: {
        summary:
          "We're sorry to see you go and are interested to learn why you decided to delete your account. We will keep your responses confidential and will use it only to improve our platform.",
        whyLeaving: 'Why are you leaving us?',
        whyLeavingOptions: [
          'Missing features I need',
          'Missing documentation',
          'Switching to another product',
          'Don’t want to receive the emails',
          'Shutting down the company/project',
          'Platform is too complex',
          'Too expensive',
          'Other',
        ],
        additional: 'Additional notes',
      },
      delete: {
        verify: 'Verify Your Identity',
        checkEmail: 'Check your email for an authentication code.',
        tips: 'This action cannot be undone. This will permanently delete your account and the associated data.',
        confirm: 'Confirm Account Deletion',
      },
    },
  },
}

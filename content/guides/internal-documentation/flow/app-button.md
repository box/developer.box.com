---
hide: true
rank: 7
---

<!-- does not need translation -->

# App Button

An app button can be used to create a preconfigured app for a user.

<H>
  <AppButton
    id='postman_app'
    name='Postman'
    scopes='root_readwrite,manage_managed_users'
    can_act_as_user
    access='application'
    authentication_type='auth_code_grant'
    redirect_url='/auth/callback'
    cors_origins=''>
    Create an app
  </AppButton>
</H>
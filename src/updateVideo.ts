import { google } from 'googleapis';
import 'dotenv/config';
import { sendTextMessage } from './twilio';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);


const scopes = [
  'https://www.googleapis.com/auth/youtube.force-ssl'
];

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  include_granted_scopes: true
});
sendTextMessage(`Click the following link to authenticate: ${authorizationUrl}`)

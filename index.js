const emailLog = require('./email_log.json');

function countUniqueEmails(emailFile) {
  // do work here
  let uniqueEmails = {};
  emailFile.emails.filter(function(email){
    if (!uniqueEmails[email.email]){
      uniqueEmails[email.email] = 1;
    } else {
      uniqueEmails[email.email]++;
    }
  })
  return uniqueEmails;
}
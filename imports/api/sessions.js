import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Sessions = new Mongo.Collection('sessions');
 
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('sessions', function sessionsPublication() {
    return Sessions.find({
	    $or: [
	        { private: { $ne: true } },
	        { owner: this.userId },
	    ],
    });
  });
}

Meteor.methods({
  'sessions.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a session
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Sessions.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'sessions.remove'(sessionId) {
    check(sessionId, String);
 
    const session = Sessions.findOne(sessionId);
    if (session.private && session.owner !== this.userId) {
      // If the session is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
 
    Sessions.remove(sessionId);
  },
  'sessions.setChecked'(sessionId, setChecked) {
    check(sessionId, String);
    check(setChecked, Boolean);
 
    const session = Sessions.findOne(sessionId);
    if (session.private && session.owner !== this.userId) {
      // If the session is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
 
    Sessions.update(sessionId, { $set: { checked: setChecked } });
  },
  'sessions.setPrivate'(sessionId, setToPrivate) {
    check(sessionId, String);
    check(setToPrivate, Boolean);
 
    const session = Sessions.findOne(sessionId);
 
    // Make sure only the session owner can make a session private
    if (session.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Sessions.update(sessionId, { $set: { private: setToPrivate } });
  },
});
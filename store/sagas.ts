import { all, fork } from 'redux-saga/effects';
// import app from './App/sagas';
// import activityAcknowledgement from 'src/modules/sagas/acknowledgement-submissions';
// import acknowledgementSubmissions from 'src/modules/sagas/activity-acknowledgement';
// import activityPage from 'src/modules/sagas/activity-page';
// import activityQuiz from 'src/modules/sagas/activity-quiz';
// import fileUploader from 'src/element/FileUploader/state/sagas'; // should be fileUploader in elements folder?
// import courseCategories from 'src/modules/sagas/course-categories';
// import course from 'src/modules/sagas/course';
// import courses from 'src/modules/sagas/courses';
// import courseConfigs from 'src/modules/sagas/course-configs';
// import courseEnrolments from 'src/modules/sagas/course-enrolments';
// import courseEnrolmentRequests from 'src/modules/sagas/course-enrolment-requests';
// import enrolmentRequests from 'src/modules/sagas/enrolment-requests';
// import courseEnrolment from 'src/modules/sagas/course-enrolment';
// import externalTrainingEnrolmentSaga from 'src/modules/sagas/external-training-enrolment';
// import externalTrainingEnrolmentsSaga from 'src/modules/sagas/external-training-enrolments';
// import externalTrainingsSaga from 'src/modules/sagas/external-trainings';
// import faceToFaceActivity from 'src/modules/sagas/face-to-face-activity';
// import faceToFaceSignUpSaga from 'src/modules/sagas/face-to-face-sign-up';
// import faceToFaceSignUpsSaga from 'src/modules/sagas/face-to-face-sign-ups';
// import faceToFaceSessionSaga from 'src/modules/sagas/face-to-face-session';
// import faceToFaceSessionsSaga from 'src/modules/sagas/face-to-face-sessions';
// import faceToFaceModalSaga from 'src/modules/sagas/face-to-face-modal';
// import usersSaga from 'src/modules/sagas/users';
// import externalTrainingConfigsSaga from 'src/modules/sagas/external-training-configs';
// import quizSubmissionSaga from 'src/modules/sagas/quiz-submission';

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    // fork(app),
    // fork(activityAcknowledgement),
    // fork(acknowledgementSubmissions),
    // fork(activityPage),
    // fork(activityQuiz),
    // fork(fileUploader),
    // fork(courseCategories),
    // fork(course),
    // fork(courses),
    // fork(courseConfigs),
    // fork(courseEnrolments),
    // fork(courseEnrolmentRequests),
    // fork(enrolmentRequests),
    // fork(courseEnrolment),
    // fork(faceToFaceActivity),
    // fork(faceToFaceSignUpSaga),
    // fork(faceToFaceSignUpsSaga),
    // fork(faceToFaceSessionSaga),
    // fork(faceToFaceSessionsSaga),
    // fork(faceToFaceModalSaga),
    // fork(externalTrainingEnrolmentSaga),
    // fork(externalTrainingEnrolmentsSaga),
    // fork(externalTrainingsSaga),
    // fork(usersSaga),
    // fork(externalTrainingConfigsSaga),
    // fork(quizSubmissionSaga),
  ]);
}

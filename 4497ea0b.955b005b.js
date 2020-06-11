(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(2),o=n(6),r=(n(0),n(142)),a={title:"Phone Authentication",sidebar_label:"Phone Auth"},c={id:"auth/phone",title:"Phone Authentication",description:"This documentation is a work in progress.",source:"@site/../docs/auth/phone.mdx",permalink:"/flutterfire/docs/auth/phone",editUrl:"https://github.com/FirebaseExtended/flutterfire/edit/next/docs/../docs/auth/phone.mdx",sidebar_label:"Phone Auth",sidebar:"main",previous:{title:"Social Authentication",permalink:"/flutterfire/docs/auth/social"},next:{title:"Cloud Firestore",permalink:"/flutterfire/docs/firestore/overview"}},s=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Usage",id:"usage",children:[{value:"Sign In",id:"sign-in",children:[]},{value:"Testing",id:"testing",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This documentation is a work in progress.")),Object(r.b)("p",null,"Phone authentication allows users to sign in to Firebase using their phone as the authenticator.  An SMS message is sent\nto the user via their phone number containing a unique code. Once the code has been authorized, the user is able to sign\ninto Firebase."),Object(r.b)("p",null,"Phone numbers that end users provide for authentication will be sent and stored by Google to improve spam and abuse\nprevention across Google service, including to, but not limited to Firebase. Developers should ensure they have the\nappropriate end-user conset prior to using the Firebase Authentication phone number sign-in service.authentication"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Firebase Phone Authentication is not supported in all countries. Please see their ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://firebase.google.com/support/faq/#develop"}),"FAQs")," for more information")),Object(r.b)("h2",{id:"android"},"Android"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enable Phone as a Sign-In method in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://console.firebase.google.com/u/0/project/_/authentication/providers"}),"Firebase console")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:"),"  When testing you can add test phone numbers and verification codes to the Firebase console.")))),Object(r.b)("h2",{id:"ios"},"iOS"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Enable Phone as a Sign-In method in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://console.firebase.google.com/u/0/project/_/authentication/providers"}),"Firebase console"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://firebase.google.com/docs/auth/ios/phone-auth#enable-app-verification"}),"Enable App verification")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:"),"  App verification may use APNs, if using a simulator (where APNs does not work) or APNs is not setup on the device you are using you must set the URL Schemes to the REVERSE_CLIENT_ID from the GoogleServices-Info.plist file.")))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"sign-in"},"Sign In"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-dart",metastring:'title="NEEDS UPDATING/VALIDATING"',title:'"NEEDS','UPDATING/VALIDATING"':!0}),"  void _verifyPhoneNumber() async {\n    setState(() {\n      _message = '';\n    });\n    final PhoneVerificationCompleted verificationCompleted =\n        (AuthCredential phoneAuthCredential) {\n      _auth.signInWithCredential(phoneAuthCredential);\n      setState(() {\n        _message = 'Received phone auth credential: $phoneAuthCredential';\n      });\n    };\n\n    final PhoneVerificationFailed verificationFailed =\n        (AuthException authException) {\n      setState(() {\n        _message =\n            'Phone number verification failed. Code: ${authException.code}. Message: ${authException.message}';\n      });\n    };\n\n    final PhoneCodeSent codeSent =\n        (String verificationId, [int forceResendingToken]) async {\n      widget._scaffold.showSnackBar(const SnackBar(\n        content: Text('Please check your phone for the verification code.'),\n      ));\n      _verificationId = verificationId;\n    };\n\n    final PhoneCodeAutoRetrievalTimeout codeAutoRetrievalTimeout =\n        (String verificationId) {\n      _verificationId = verificationId;\n    };\n\n    await _auth.verifyPhoneNumber(\n        phoneNumber: _phoneNumberController.text,\n        timeout: const Duration(seconds: 5),\n        verificationCompleted: verificationCompleted,\n        verificationFailed: verificationFailed,\n        codeSent: codeSent,\n        codeAutoRetrievalTimeout: codeAutoRetrievalTimeout);\n  }\n\n  // Example code of how to sign in with phone.\n  void _signInWithPhoneNumber() async {\n    final AuthCredential credential = PhoneAuthProvider.getCredential(\n      verificationId: _verificationId,\n      smsCode: _smsController.text,\n    );\n    final FirebaseUser user =\n        (await _auth.signInWithCredential(credential)).user;\n    final FirebaseUser currentUser = await _auth.currentUser();\n    assert(user.uid == currentUser.uid);\n    setState(() {\n      if (user != null) {\n        _message = 'Successfully signed in, uid: ' + user.uid;\n      } else {\n        _message = 'Sign in failed';\n      }\n    });\n  }\n}\n")),Object(r.b)("h3",{id:"testing"},"Testing"),Object(r.b)("p",null,"Firebase provides support for locally testing phone numbers. For local testing to work, you must have ensured your local\nmachine SHA1 debug key was added whilst creating your application on the Firebase Console. View the Getting Started\nguide on how to set this up."),Object(r.b)("p",null,'On the Firebase Console, select the "Phone" authentication provider and click on the "Phone numbers for testing" dropdown.'),Object(r.b)("p",null,"Enter a new phone number (e.g. +44 7444 555666) and a test code (e.g. 123456)."),Object(r.b)("p",null,"Once added, the number can be used with the signInWithPhoneNumber method, and entering the code specified will\ncause a successful sign-in."))}l.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,h=d["".concat(a,".").concat(b)]||d[b]||p[b]||r;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
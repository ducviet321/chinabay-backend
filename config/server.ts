export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3210),
  app: {
    keys: env.array('APP_KEYS', ["(#*$VB(V*SEN(C*SUCRNP*NAWEU@(*$VN@#$&VBAPW&$@&$@#*$&VNAPU*DF*SF&"]),
  },
  // url: '/vit',
});

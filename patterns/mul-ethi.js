// Hyphenation patterns for Ethiopic (multiple languages)
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-mul-ethi.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsMulEthi = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
1ሀ1 % U+1200 ha
1ሁ1 % U+1201 hu
1ሂ1 % U+1202 hi
1ሃ1 % U+1203 haa
1ሄ1 % U+1204 hee
1ህ1 % U+1205 he
1ሆ1 % U+1206 ho
1ሇ1 % U+1207 hoa
1ለ1 % U+1208 la
1ሉ1 % U+1209 lu
1ሊ1 % U+120A li
1ላ1 % U+120B laa
1ሌ1 % U+120C lee
1ል1 % U+120D le
1ሎ1 % U+120E lo
1ሏ1 % U+120F lwa
1ሐ1 % U+1210 hha
1ሑ1 % U+1211 hhu
1ሒ1 % U+1212 hhi
1ሓ1 % U+1213 hhaa
1ሔ1 % U+1214 hhee
1ሕ1 % U+1215 hhe
1ሖ1 % U+1216 hho
1ሗ1 % U+1217 hhwa
1መ1 % U+1218 ma
1ሙ1 % U+1219 mu
1ሚ1 % U+121A mi
1ማ1 % U+121B maa
1ሜ1 % U+121C mee
1ም1 % U+121D me
1ሞ1 % U+121E mo
1ሟ1 % U+121F mwa
1ሠ1 % U+1220 sza
1ሡ1 % U+1221 szu
1ሢ1 % U+1222 szi
1ሣ1 % U+1223 szaa
1ሤ1 % U+1224 szee
1ሥ1 % U+1225 sze
1ሦ1 % U+1226 szo
1ሧ1 % U+1227 szwa
1ረ1 % U+1228 ra
1ሩ1 % U+1229 ru
1ሪ1 % U+122A ri
1ራ1 % U+122B raa
1ሬ1 % U+122C ree
1ር1 % U+122D re
1ሮ1 % U+122E ro
1ሯ1 % U+122F rwa
1ሰ1 % U+1230 sa
1ሱ1 % U+1231 su
1ሲ1 % U+1232 si
1ሳ1 % U+1233 saa
1ሴ1 % U+1234 see
1ስ1 % U+1235 se
1ሶ1 % U+1236 so
1ሷ1 % U+1237 swa
1ሸ1 % U+1238 sha
1ሹ1 % U+1239 shu
1ሺ1 % U+123A shi
1ሻ1 % U+123B shaa
1ሼ1 % U+123C shee
1ሽ1 % U+123D she
1ሾ1 % U+123E sho
1ሿ1 % U+123F shwa
1ቀ1 % U+1240 qa
1ቁ1 % U+1241 qu
1ቂ1 % U+1242 qi
1ቃ1 % U+1243 qaa
1ቄ1 % U+1244 qee
1ቅ1 % U+1245 qe
1ቆ1 % U+1246 qo
1ቇ1 % U+1247 qoa
1ቈ1 % U+1248 qwa
1ቊ1 % U+124A qwi
1ቋ1 % U+124B qwaa
1ቌ1 % U+124C qwee
1ቍ1 % U+124D qwe
1ቐ1 % U+1250 qha
1ቑ1 % U+1251 qhu
1ቒ1 % U+1252 qhi
1ቓ1 % U+1253 qhaa
1ቔ1 % U+1254 qhee
1ቕ1 % U+1255 qhe
1ቖ1 % U+1256 qho
1ቘ1 % U+1258 qhwa
1ቚ1 % U+125A qhwi
1ቛ1 % U+125B qhwaa
1ቜ1 % U+125C qhwee
1ቝ1 % U+125D qhwe
1በ1 % U+1260 ba
1ቡ1 % U+1261 bu
1ቢ1 % U+1262 bi
1ባ1 % U+1263 baa
1ቤ1 % U+1264 bee
1ብ1 % U+1265 be
1ቦ1 % U+1266 bo
1ቧ1 % U+1267 bwa
1ቨ1 % U+1268 va
1ቩ1 % U+1269 vu
1ቪ1 % U+126A vi
1ቫ1 % U+126B vaa
1ቬ1 % U+126C vee
1ቭ1 % U+126D ve
1ቮ1 % U+126E vo
1ቯ1 % U+126F vwa
1ተ1 % U+1270 ta
1ቱ1 % U+1271 tu
1ቲ1 % U+1272 ti
1ታ1 % U+1273 taa
1ቴ1 % U+1274 tee
1ት1 % U+1275 te
1ቶ1 % U+1276 to
1ቷ1 % U+1277 twa
1ቸ1 % U+1278 ca
1ቹ1 % U+1279 cu
1ቺ1 % U+127A ci
1ቻ1 % U+127B caa
1ቼ1 % U+127C cee
1ች1 % U+127D ce
1ቾ1 % U+127E co
1ቿ1 % U+127F cwa
1ኀ1 % U+1280 xa
1ኁ1 % U+1281 xu
1ኂ1 % U+1282 xi
1ኃ1 % U+1283 xaa
1ኄ1 % U+1284 xee
1ኅ1 % U+1285 xe
1ኆ1 % U+1286 xo
1ኇ1 % U+1287 xoa
1ኈ1 % U+1288 xwa
1ኊ1 % U+128A xwi
1ኋ1 % U+128B xwaa
1ኌ1 % U+128C xwee
1ኍ1 % U+128D xwe
1ነ1 % U+1290 na
1ኑ1 % U+1291 nu
1ኒ1 % U+1292 ni
1ና1 % U+1293 naa
1ኔ1 % U+1294 nee
1ን1 % U+1295 ne
1ኖ1 % U+1296 no
1ኗ1 % U+1297 nwa
1ኘ1 % U+1298 nya
1ኙ1 % U+1299 nyu
1ኚ1 % U+129A nyi
1ኛ1 % U+129B nyaa
1ኜ1 % U+129C nyee
1ኝ1 % U+129D nye
1ኞ1 % U+129E nyo
1ኟ1 % U+129F nywa
1አ1 % U+12A0 glottal a
1ኡ1 % U+12A1 glottal u
1ኢ1 % U+12A2 glottal i
1ኣ1 % U+12A3 glottal aa
1ኤ1 % U+12A4 glottal ee
1እ1 % U+12A5 glottal e
1ኦ1 % U+12A6 glottal o
1ኧ1 % U+12A7 glottal wa
1ከ1 % U+12A8 ka
1ኩ1 % U+12A9 ku
1ኪ1 % U+12AA ki
1ካ1 % U+12AB kaa
1ኬ1 % U+12AC kee
1ክ1 % U+12AD ke
1ኮ1 % U+12AE ko
1ኯ1 % U+12AF koa
1ኰ1 % U+12B0 kwa
1ኲ1 % U+12B2 kwi
1ኳ1 % U+12B3 kwaa
1ኴ1 % U+12B4 kwee
1ኵ1 % U+12B5 kwe
1ኸ1 % U+12B8 kxa
1ኹ1 % U+12B9 kxu
1ኺ1 % U+12BA kxi
1ኻ1 % U+12BB kxaa
1ኼ1 % U+12BC kxee
1ኽ1 % U+12BD kxe
1ኾ1 % U+12BE kxo
1ዀ1 % U+12C0 kxwa
1ዂ1 % U+12C2 kxwi
1ዃ1 % U+12C3 kxwaa
1ዄ1 % U+12C4 kxwee
1ዅ1 % U+12C5 kxwe
1ወ1 % U+12C8 wa
1ዉ1 % U+12C9 wu
1ዊ1 % U+12CA wi
1ዋ1 % U+12CB waa
1ዌ1 % U+12CC wee
1ው1 % U+12CD we
1ዎ1 % U+12CE wo
1ዏ1 % U+12CF woa
1ዐ1 % U+12D0 pharyngeal a
1ዑ1 % U+12D1 pharyngeal u
1ዒ1 % U+12D2 pharyngeal i
1ዓ1 % U+12D3 pharyngeal aa
1ዔ1 % U+12D4 pharyngeal ee
1ዕ1 % U+12D5 pharyngeal e
1ዖ1 % U+12D6 pharyngeal o
1ዘ1 % U+12D8 za
1ዙ1 % U+12D9 zu
1ዚ1 % U+12DA zi
1ዛ1 % U+12DB zaa
1ዜ1 % U+12DC zee
1ዝ1 % U+12DD ze
1ዞ1 % U+12DE zo
1ዟ1 % U+12DF zwa
1ዠ1 % U+12E0 zha
1ዡ1 % U+12E1 zhu
1ዢ1 % U+12E2 zhi
1ዣ1 % U+12E3 zhaa
1ዤ1 % U+12E4 zhee
1ዥ1 % U+12E5 zhe
1ዦ1 % U+12E6 zho
1ዧ1 % U+12E7 zhwa
1የ1 % U+12E8 ya
1ዩ1 % U+12E9 yu
1ዪ1 % U+12EA yi
1ያ1 % U+12EB yaa
1ዬ1 % U+12EC yee
1ይ1 % U+12ED ye
1ዮ1 % U+12EE yo
1ዯ1 % U+12EF yoa
1ደ1 % U+12F0 da
1ዱ1 % U+12F1 du
1ዲ1 % U+12F2 di
1ዳ1 % U+12F3 daa
1ዴ1 % U+12F4 dee
1ድ1 % U+12F5 de
1ዶ1 % U+12F6 do
1ዷ1 % U+12F7 dwa
1ዸ1 % U+12F8 dda
1ዹ1 % U+12F9 ddu
1ዺ1 % U+12FA ddi
1ዻ1 % U+12FB ddaa
1ዼ1 % U+12FC ddee
1ዽ1 % U+12FD dde
1ዾ1 % U+12FE ddo
1ዿ1 % U+12FF ddwa
1ጀ1 % U+1300 ja
1ጁ1 % U+1301 ju
1ጂ1 % U+1302 ji
1ጃ1 % U+1303 jaa
1ጄ1 % U+1304 jee
1ጅ1 % U+1305 je
1ጆ1 % U+1306 jo
1ጇ1 % U+1307 jwa
1ገ1 % U+1308 ga
1ጉ1 % U+1309 gu
1ጊ1 % U+130A gi
1ጋ1 % U+130B gaa
1ጌ1 % U+130C gee
1ግ1 % U+130D ge
1ጎ1 % U+130E go
1ጏ1 % U+130F goa
1ጐ1 % U+1310 gwa
1ጒ1 % U+1312 gwi
1ጓ1 % U+1313 gwaa
1ጔ1 % U+1314 gwee
1ጕ1 % U+1315 gwe
1ጘ1 % U+1318 gga
1ጙ1 % U+1319 ggu
1ጚ1 % U+131A ggi
1ጛ1 % U+131B ggaa
1ጜ1 % U+131C ggee
1ጝ1 % U+131D gge
1ጞ1 % U+131E ggo
1ጟ1 % U+131F ggwaa
1ጠ1 % U+1320 tha
1ጡ1 % U+1321 thu
1ጢ1 % U+1322 thi
1ጣ1 % U+1323 thaa
1ጤ1 % U+1324 thee
1ጥ1 % U+1325 the
1ጦ1 % U+1326 tho
1ጧ1 % U+1327 thwa
1ጨ1 % U+1328 cha
1ጩ1 % U+1329 chu
1ጪ1 % U+132A chi
1ጫ1 % U+132B chaa
1ጬ1 % U+132C chee
1ጭ1 % U+132D che
1ጮ1 % U+132E cho
1ጯ1 % U+132F chwa
1ጰ1 % U+1330 pha
1ጱ1 % U+1331 phu
1ጲ1 % U+1332 phi
1ጳ1 % U+1333 phaa
1ጴ1 % U+1334 phee
1ጵ1 % U+1335 phe
1ጶ1 % U+1336 pho
1ጷ1 % U+1337 phwa
1ጸ1 % U+1338 tsa
1ጹ1 % U+1339 tsu
1ጺ1 % U+133A tsi
1ጻ1 % U+133B tsaa
1ጼ1 % U+133C tsee
1ጽ1 % U+133D tse
1ጾ1 % U+133E tso
1ጿ1 % U+133F tswa
1ፀ1 % U+1340 tza
1ፁ1 % U+1341 tzu
1ፂ1 % U+1342 tzi
1ፃ1 % U+1343 tzaa
1ፄ1 % U+1344 tzee
1ፅ1 % U+1345 tze
1ፆ1 % U+1346 tzo
1ፇ1 % U+1347 tzoa
1ፈ1 % U+1348 fa
1ፉ1 % U+1349 fu
1ፊ1 % U+134A fi
1ፋ1 % U+134B faa
1ፌ1 % U+134C fee
1ፍ1 % U+134D fe
1ፎ1 % U+134E fo
1ፏ1 % U+134F fwa
1ፐ1 % U+1350 pa
1ፑ1 % U+1351 pu
1ፒ1 % U+1352 pi
1ፓ1 % U+1353 paa
1ፔ1 % U+1354 pee
1ፕ1 % U+1355 pe
1ፖ1 % U+1356 po
1ፗ1 % U+1357 pwa
1ፘ1 % U+1358 rya
1ፙ1 % U+1359 mya
1ፚ1 % U+135A fya
1ᎀ1 % U+1380 sebatbeit mwa
1ᎁ1 % U+1381 mwi
1ᎂ1 % U+1382 mwee
1ᎃ1 % U+1383 mwe
1ᎄ1 % U+1384 sebatbeit bwa
1ᎅ1 % U+1385 bwi
1ᎆ1 % U+1386 bwee
1ᎇ1 % U+1387 bwe
1ᎈ1 % U+1388 sebatbeit fwa
1ᎉ1 % U+1389 fwi
1ᎊ1 % U+138A fwee
1ᎋ1 % U+138B fwe
1ᎌ1 % U+138C sebatbeit pwa
1ᎍ1 % U+138D pwi
1ᎎ1 % U+138E pwee
1ᎏ1 % U+138F pwe
1ⶀ1 % U+2D80 loa
1ⶁ1 % U+2D81 moa
1ⶂ1 % U+2D82 roa
1ⶃ1 % U+2D83 soa
1ⶄ1 % U+2D84 shoa
1ⶅ1 % U+2D85 boa
1ⶆ1 % U+2D86 toa
1ⶇ1 % U+2D87 coa
1ⶈ1 % U+2D88 noa
1ⶉ1 % U+2D89 nyoa
1ⶊ1 % U+2D8A glottal oa
1ⶋ1 % U+2D8B zoa
1ⶌ1 % U+2D8C doa
1ⶍ1 % U+2D8D ddoa
1ⶎ1 % U+2D8E joa
1ⶏ1 % U+2D8F thoa
1ⶐ1 % U+2D90 choa
1ⶑ1 % U+2D91 phoa
1ⶒ1 % U+2D92 poa
1ⶓ1 % U+2D93 ggwa
1ⶔ1 % U+2D94 ggwi
1ⶕ1 % U+2D95 ggwee
1ⶖ1 % U+2D96 ggwe
1ⶠ1 % U+2DA0 ssa
1ⶡ1 % U+2DA1 ssu
1ⶢ1 % U+2DA2 ssi
1ⶣ1 % U+2DA3 ssaa
1ⶤ1 % U+2DA4 ssee
1ⶥ1 % U+2DA5 sse
1ⶦ1 % U+2DA6 sso
1ⶨ1 % U+2DA8 cca
1ⶩ1 % U+2DA9 ccu
1ⶪ1 % U+2DAA cci
1ⶫ1 % U+2DAB ccaa
1ⶬ1 % U+2DAC ccee
1ⶭ1 % U+2DAD cce
1ⶮ1 % U+2DAE cco
1ⶰ1 % U+2DB0 zza
1ⶱ1 % U+2DB1 zzu
1ⶲ1 % U+2DB2 zzi
1ⶳ1 % U+2DB3 zzaa
1ⶴ1 % U+2DB4 zzee
1ⶵ1 % U+2DB5 zze
1ⶶ1 % U+2DB6 zzo
1ⶸ1 % U+2DB8 ccha
1ⶹ1 % U+2DB9 cchu
1ⶺ1 % U+2DBA cchi
1ⶻ1 % U+2DBB cchaa
1ⶼ1 % U+2DBC cchee
1ⶽ1 % U+2DBD cche
1ⶾ1 % U+2DBE ccho
1ⷀ1 % U+2DC0 qya
1ⷁ1 % U+2DC1 qyu
1ⷂ1 % U+2DC2 qyi
1ⷃ1 % U+2DC3 qyaa
1ⷄ1 % U+2DC4 qyee
1ⷅ1 % U+2DC5 qye
1ⷆ1 % U+2DC6 qyo
1ⷈ1 % U+2DC8 kya
1ⷉ1 % U+2DC9 kyu
1ⷊ1 % U+2DCA kyi
1ⷋ1 % U+2DCB kyaa
1ⷌ1 % U+2DCC kyee
1ⷍ1 % U+2DCD kye
1ⷎ1 % U+2DCE kyo
1ⷐ1 % U+2DD0 xya
1ⷑ1 % U+2DD1 xyu
1ⷒ1 % U+2DD2 xyi
1ⷓ1 % U+2DD3 xyaa
1ⷔ1 % U+2DD4 xyee
1ⷕ1 % U+2DD5 xye
1ⷖ1 % U+2DD6 xyo
1ⷘ1 % U+2DD8 gya
1ⷙ1 % U+2DD9 gyu
1ⷚ1 % U+2DDA gyi
1ⷛ1 % U+2DDB gyaa
1ⷜ1 % U+2DDC gyee
1ⷝ1 % U+2DDD gye
1ⷞ1 % U+2DDE gyo
2፡1 % U+1361 ETHIOPIC WORDSPACE
2።1 % U+1362 ETHIOPIC FULL STOP
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));

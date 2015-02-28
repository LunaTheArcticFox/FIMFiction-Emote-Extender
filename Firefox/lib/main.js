var ss = require("sdk/simple-storage");

ss.storage.modules = null;
if (!ss.storage.modules) {
	ss.storage.modules = [
		{
			"name" : "Standard Tables",
			"author" : "KrazyTheFox",
			"enabled" : true,
			"emoteTables" : [
				{
					"name" : "Applejack",
					"emotes" : [
						[ "http://i.imgur.com/NBEDt.png", "ajlie" ],
						[ "http://i.imgur.com/5Tp73.png", "ajhappy" ],
						[ "http://i.imgur.com/oa0BJ.png", "ajsup" ],
						[ "http://i.imgur.com/oaEI1BM.png", "ajderp" ],
						[ "http://i.imgur.com/bEP8EQ2.png", "ajgasp" ],
						[ "http://i.imgur.com/mMp7L.png", "ajcower" ],
						[ "http://i.imgur.com/HZlOi.png", "ajsly" ],
						[ "http://i.imgur.com/7PYFy.png", "ajsquinty" ],
						[ "http://i.imgur.com/DHDbq.png", "ajugh" ],
						[ "http://i.imgur.com/8zRAx.png", "ajwut" ],
						[ "http://i.imgur.com/aBIJ1.png", "ajfrown" ],
						[ "http://i.imgur.com/DmoWN.png", "ajhmmm" ],
						[ "http://i.imgur.com/MdJgU.png", "ajconfused" ],
						[ "http://i.imgur.com/dVnqE.png", "ajcarefree" ],
						[ "http://i.imgur.com/TAf9J.png", "ajconfident" ],
						[ "http://i.imgur.com/gNxjD.png", "ajproud" ],
						[ "http://i.imgur.com/JmYib.png", "ajmad" ],
						[ "http://i.imgur.com/aPZth.png", "ajinnocent" ],
						[ "http://i.imgur.com/4sZY1.png", "ajwoozy" ],
						[ "http://i.imgur.com/1NN8f.png", "ajwhat" ],
						[ "http://i.imgur.com/xmRQV.png", "ajskeptical" ],
						[ "http://i.imgur.com/lGb8P.png", "ajcurious" ],
						[ "http://i.imgur.com/0zTKq.png", "ajsmirk" ],
						[ "http://i.imgur.com/BeQHk.png", "ajbiggrin" ],
						[ "http://i.imgur.com/fl6ox.png", "ajcry" ],
						[ "http://i.imgur.com/mbZjl.png", "ajmoustache" ],
						[ "http://i.imgur.com/r19vB.png", "ajbashful" ],
						[ "http://i.imgur.com/hMgvT.png", "ajunamused" ],
						[ "http://i.imgur.com/ZCoEh.png", "ajsalute" ],
						[ "http://i.imgur.com/1ppRy.png", "ajglasses" ],
						[ "http://i.imgur.com/kjSfI.png", "ajhazy" ],
						[ "http://i.imgur.com/pwUmu.png", "ajdiscorded" ],
						[ "http://i.imgur.com/geqle.png", "ajghost" ],
						[ "http://i.imgur.com/LOrxf.png", "ajannoyed" ],
						[ "http://i.imgur.com/Evd0x.png", "ajcrazy" ],
						[ "http://i.imgur.com/tjCXQ.png", "ajeww" ],
						[ "http://i.imgur.com/NlvYtnA.png", "ajooh" ],
						[ "http://i.imgur.com/Qe7TiLt.png", "ajwait" ],
						[ "http://i.imgur.com/yAmRYea.png", "ajangry" ],
						[ "http://i.imgur.com/pww1wjm.png", "ajstubborn" ],
						[ "http://i.imgur.com/KZHFE8U.png", "ajno" ],
						[ "http://i.imgur.com/MZsrxQK.png", "ajunsure" ],
						[ "http://i.imgur.com/aHVIEJf.png", "ajfearful" ],
						[ "http://i.imgur.com/DPk2NZn.png", "ajnotlying" ],
						[ "http://i.imgur.com/ogtnDnC.png", "ajexcited" ],
						[ "http://i.imgur.com/oBAx788.png", "ajwink" ],
						[ "http://i.imgur.com/myOBKB4.png", "ajfaint" ],
						[ "http://i.imgur.com/LRD2W70.png", "ajglare" ],
						[ "http://i.imgur.com/MIrVmT7.png", "ajsad" ],
						[ "http://i.imgur.com/yyfj6BZ.png", "fillyaj" ],
						[ "http://i.imgur.com/6DvjrRv.png", "ajrage" ],
						[ "http://i.imgur.com/0REqcvr.png", "ajcanthearyou" ]
					]
				},
				{
					"name" : "Fluttershy",
					"emotes" : [
						["http://i.imgur.com/hCkff.png", "flutterjerk"],
						["http://i.imgur.com/FlxUX.png", "flutterroll"],
						["http://i.imgur.com/Mpt2V.png", "flutterwhoa"],
						["http://i.imgur.com/PKx4m.png", "flutterfear"],
						["http://i.imgur.com/J1YdP.png", "fluttershy"],
						["http://i.imgur.com/iX6uT.png", "flutterserious"],
						["http://i.imgur.com/AUoqx.png", "fluttershh"],
						["http://i.imgur.com/gphLa.png", "flutteryay"],
						["http://i.imgur.com/eAjva.png", "flutterwink"],
						["http://i.imgur.com/H718D.png", "flutterblush"],
						["http://i.imgur.com/ahOjP.png", "flutterloveme"],
						["http://i.imgur.com/5wxoPUa.png", "whattheflut"],
						["http://i.imgur.com/sb2Qbof.png", "fluttersmile"],
						["http://i.imgur.com/24nRCr5.png", "flutterhope"],
						["http://i.imgur.com/AFuKMoD.png", "flutterglee"],
						["http://i.imgur.com/mkCLMHb.png", "flutterfrown"],
						["http://i.imgur.com/IOcuWkK.png", "flutterstern"],
						["http://i.imgur.com/YUeUKME.png", "flutterhide"],
						["http://i.imgur.com/z4PAdhi.png", "flutteroops"],
						["http://i.imgur.com/wwVpoHt.png", "flutterohmy"],
						["http://i.imgur.com/cSViT7t.png", "flutterterror"],
						["http://i.imgur.com/3UFhl3F.png", "fluttercute"],
						["http://i.imgur.com/968NYEH.png", "flutterjoy"],
						["http://i.imgur.com/HUbolAq.png", "flutterbride"],
						["http://i.imgur.com/Ade2YQ4.png", "flutterglee"],
						["http://i.imgur.com/nirPCDd.png", "fillyshy"],
						["http://i.imgur.com/MHYaQsA.png", "fluttermope"],
						["http://i.imgur.com/r4SxEH3.png", "flutterworry"],
						["http://i.imgur.com/xZjtFqi.png", "flutterunsure"],
						["http://i.imgur.com/5c1j3xv.png", "flutterhorrified"],
						["http://i.imgur.com/uSOX8aw.png", "fluttercontent"],
						["http://i.imgur.com/EcWBGKl.png", "flutteruhoh"],
						["http://i.imgur.com/hkeh1qO.png", "flutterdie"],
						["http://i.imgur.com/zFPxSbB.png", "flutterdisapprove"],
						["http://i.imgur.com/UgQIIgZ.png", "flutterannoyed"],
						["http://i.imgur.com/7LN4PGP.png", "fluttersheepish"],
						["http://i.imgur.com/Ar4a6oI.png", "fluttersing"],
						["http://i.imgur.com/Tsg6sSk.png", "flutterfret"],
						["http://i.imgur.com/3Bw1vJc.png", "flutterhelmet"],
						["http://i.imgur.com/09KvwZS.png", "fluttergrr"],
						["http://i.imgur.com/Pz8VqXm.png", "flutterhappy"]
					]
				},
				{
					"name" : "Pinkie Pie",
					"emotes" : [
						["http://i.imgur.com/N6frZ.png", "pinkiefear"],
						["http://i.imgur.com/EYLpq.png", "pinkieawe"],
						["http://i.imgur.com/ojb2X.png", "pinkiecute"],
						["http://i.imgur.com/30Blc.png", "pinkieboring"],
						["http://i.imgur.com/yGwJZ.png", "pinkieshrug"],
						["http://i.imgur.com/aMNtT.png", "pinkieseesyou"],
						["http://i.imgur.com/qO3Da.png", "pinkieohhi"],
						["http://i.imgur.com/UGWzB.png", "pinkieparty"],
						["http://i.imgur.com/477xD.png", "pinkielaugh"],
						["http://i.imgur.com/RXtaw.png", "pinkiejoy"],
						["http://i.imgur.com/uEidI.png", "pinkamina"],
						["http://i.imgur.com/xeWgy.png", "pinkiehuhhuh"],
						["http://i.imgur.com/zbei6cO.png", "pinkiestache"],
						["http://i.imgur.com/zplekGi.png", "pinkieunsure"],
						["http://i.imgur.com/jvzynek.png", "pinkiemute"],
						["http://i.imgur.com/LMtxcao.png", "pinkaboo"],
						["http://i.imgur.com/7ppPcYn.png", "partycannon"],
						["http://i.imgur.com/4doC5ED.png", "puddinghead"],
						["http://i.imgur.com/MQBZ41g.png", "pinkieglee"],
						["http://i.imgur.com/pdLkfXA.png", "pinkiewatchout"],
						["http://i.imgur.com/NwyjTTE.png", "pinkiecry"],
						["http://i.imgur.com/Q7KFdL7.png", "pinkieshock"],
						["http://i.imgur.com/q4uECGh.png", "pinkiesing"],
						["http://i.imgur.com/4M5fMay.png", "pinkiehither"],
						["http://i.imgur.com/8BDWuaI.png", "pinkiechew"],
						["http://i.imgur.com/sBq1PM1.png", "pinkiethrow"],
						["http://i.imgur.com/Ok4LXo8.png", "pinkiesatisfied"],
						["http://i.imgur.com/NH9sCfd.png", "pinkiecheck"],
						["http://i.imgur.com/4nGTfIp.png", "pinkiepieroll"],
						["http://i.imgur.com/ba6ZNCe.png", "pinkiesad"],
						["http://i.imgur.com/pfxW46W.png", "pinkiehurt"],
						["http://i.imgur.com/EOCIHpr.png", "pinkiesquee"],
						["http://i.imgur.com/guiiQT2.png", "pinkieglass"],
						["http://i.imgur.com/sBLaV.png", "pinkiewut"]
					]
				},
				{
					"name" : "Rainbow Dash",
					"emotes" : [
						["http://i.imgur.com/tCets.png", "rdcry"],
						["http://i.imgur.com/dB5nN.png", "rdsmile"],
						["http://i.imgur.com/Kv8nA.png", "rdwut"],
						["http://i.imgur.com/OzWNB.png", "rdawesome"],
						["http://i.imgur.com/jjgRs.png", "rdcool"],
						["http://i.imgur.com/oZUgV.png", "rdsitting"],
						["http://i.imgur.com/XtUF0.png", "rdhappy"],
						["http://i.imgur.com/o42xN.png", "rdannoyed"],
						["http://i.imgur.com/9HNfn.png", "rdgross"],
						["http://i.imgur.com/NRtTF.png", "rdlouder"],
						["http://i.imgur.com/CqXDDh6.png", "rdscared"],
						["http://i.imgur.com/QoZIz.png", "rdhuh"],
						["http://i.imgur.com/Y7iEz.png", "rdsalute"],
						["http://i.imgur.com/DN4kI.png", "rdawwyeah"],
						["http://i.imgur.com/fQFdk.png", "Emote"],
						["http://i.imgur.com/5JXsL.png", "Emote"],
						["http://i.imgur.com/drWSW.png", "Emote"],
						["http://i.imgur.com/r1Eed.png", "Emote"],
						["http://i.imgur.com/mI2kf.png", "Emote"],
						["http://i.imgur.com/JJakx.png", "Emote"],
						["http://i.imgur.com/2mIou.png", "Emote"],
						["http://i.imgur.com/l49YA.png", "Emote"],
						["http://i.imgur.com/Bo3i2.png", "Emote"],
						["http://i.imgur.com/F4J97.png", "Emote"],
						["http://i.imgur.com/99WZ6.png", "Emote"],
						["http://i.imgur.com/KgKuu.png", "Emote"],
						["http://i.imgur.com/ys5RX.png", "Emote"],
						["http://i.imgur.com/m10uz.png", "Emote"],
						["http://i.imgur.com/AJ9zx.png", "Emote"],
						["http://i.imgur.com/81dJd.png", "Emote"],
						["http://i.imgur.com/vc4Ok.png", "Emote"],
						["http://i.imgur.com/e09RZ.png", "Emote"],
						["http://i.imgur.com/Uvt7B.png", "Emote"],
						["http://i.imgur.com/DupLe.png", "Emote"],
						["http://i.imgur.com/Am3AY.png", "Emote"],
						["http://i.imgur.com/7TZmw.png", "Emote"],
						["http://i.imgur.com/72IFYgG.png", "Emote"],
						["http://i.imgur.com/xq9lagn.png", "Emote"],
						["http://i.imgur.com/Cqzgjte.png", "Emote"],
						["http://i.imgur.com/fmPKYjE.png", "Emote"],
						["http://i.imgur.com/ZaEN90U.png", "Emote"],
						["http://i.imgur.com/1bcgbrm.png", "Emote"],
						["http://i.imgur.com/aJbPeur.png", "Emote"],
						["http://i.imgur.com/DuTtzKD.png", "Emote"],
						["http://i.imgur.com/btqHYra.png", "Emote"],
						["http://i.imgur.com/RpDP6ER.png", "Emote"],
						["http://i.imgur.com/Giz33co.png", "Emote"],
						["http://i.imgur.com/hn8oRP5.png", "Emote"],
						["http://i.imgur.com/g63FgrH.png", "Emote"]
					]
				},
				{
					"name" : "Rarity",
					"emotes" : [
						["http://i.imgur.com/CGBhB.png", "raridaww"],
						["http://i.imgur.com/Ma3vZ.png", "rarireally"],
						["http://i.imgur.com/zbSFhpV.png", "raripaper"],
						["http://i.imgur.com/dObdk0h.png", "rarishock"],
						["http://i.imgur.com/i3eNB.png", "rariyell"],
						["http://i.imgur.com/TAnnF.png", "raridress"],
						["http://i.imgur.com/DHfUL.png", "rariwut"],
						["http://i.imgur.com/9YyaH.png", "rariwhy"],
						["http://i.imgur.com/DobP4.png", "rarityannoyed"],
						["http://i.imgur.com/DiqwR.png", "rariwhine"],
						["http://i.imgur.com/SUAwQ.png", "rarijudge"],
						["http://i.imgur.com/JT3f7.png", "rariprimp"],
						["http://i.imgur.com/u3SP8.png", "rarisad"],
						["http://i.imgur.com/ZkYG2.png", "rarifabulous"],
						["http://i.imgur.com/2tu9n.png", "rariwahaha"],
						["http://i.imgur.com/KluyWmn.png", "Emote"],
						["http://i.imgur.com/cUszKbb.png", "Emote"],
						["http://i.imgur.com/9yFw70j.png", "Emote"],
						["http://i.imgur.com/hyH6usq.png", "Emote"],
						["http://i.imgur.com/CpZgXTk.png", "Emote"],
						["http://i.imgur.com/hT1CSak.png", "Emote"],
						["http://i.imgur.com/HDAG3B9.png", "Emote"],
						["http://i.imgur.com/tHHlMgs.png", "Emote"],
						["http://i.imgur.com/GLRdqlz.png", "Emote"],
						["http://i.imgur.com/dwryYQj.png", "Emote"],
						["http://i.imgur.com/pqytDZN.png", "Emote"],
						["http://i.imgur.com/JqAPTWq.png", "Emote"],
						["http://i.imgur.com/mmVWxDL.png", "Emote"],
						["http://i.imgur.com/YHqF6Oe.png", "Emote"],
						["http://i.imgur.com/BTkTZtQ.png", "Emote"],
						["http://i.imgur.com/ijHyYGN.png", "Emote"],
						["http://i.imgur.com/H93RXx3.png", "Emote"],
						["http://i.imgur.com/rqasPvb.png", "Emote"],
						["http://i.imgur.com/qrNLnm7.png", "Emote"],
						["http://i.imgur.com/gSUBQJo.png", "Emote"],
						["http://i.imgur.com/L82FBf7.png", "Emote"],
						["http://i.imgur.com/uUFRVSw.png", "Emote"],
						["http://i.imgur.com/9cktQCa.png", "Emote"],
						["http://i.imgur.com/FIMTF9F.png", "Emote"],
						["http://i.imgur.com/6Xjr4qx.png", "Emote"],
						["http://i.imgur.com/8FLpgzg.png", "Emote"],
						["http://i.imgur.com/zDp89aN.png", "Emote"],
						["http://i.imgur.com/E3hoUZ9.png", "Emote"],
						["http://i.imgur.com/gB0LmNp.png", "Emote"],
						["http://i.imgur.com/4rkfVbA.png", "Emote"],
						["http://i.imgur.com/e3oGM6f.png", "Emote"]
					]
				},
				{
					"name" : "Twilight Sparkle",
					"emotes" : [
						["http://i.imgur.com/AhJQA.png", "twipride"],
						["http://i.imgur.com/teICa.png", "twicrazy"],
						["http://i.imgur.com/qDNQJ.png", "twibeam"],
						["http://i.imgur.com/ULdav.png", "twiright"],
						["http://i.imgur.com/NZ9LG.png", "twisquint"],
						["http://i.imgur.com/lyj7g.png", "twifacehoof"],
						["http://i.imgur.com/UQUPg.png", "twirage"],
						["http://i.imgur.com/uCBdE.png", "twismug"],
						["http://i.imgur.com/h6FPh.png", "twismile"],
						["http://i.imgur.com/Zvhzz.png", "twistare"],
						["http://i.imgur.com/5faXAtj.png", "twidaww"],
						["http://i.imgur.com/IbDeO.png", "twiponder"],
						["http://i.imgur.com/5OGeQ.png", "Emote"],
						["http://i.imgur.com/hs7Hh.png", "Emote"],
						["http://i.imgur.com/Srz3i.png", "Emote"],
						["http://i.imgur.com/HlSYp.png", "Emote"],
						["http://i.imgur.com/2652g.png", "Emote"],
						["http://i.imgur.com/NmMWv.png", "Emote"],
						["http://i.imgur.com/Ccokh.png", "Emote"],
						["http://i.imgur.com/hgIE1.png", "Emote"],
						["http://i.imgur.com/hRqZN.png", "Emote"],
						["http://i.imgur.com/2hXpy.png", "Emote"],
						["http://i.imgur.com/ZsI8b.png", "Emote"],
						["http://i.imgur.com/fGB3u.png", "Emote"],
						["http://i.imgur.com/1wjw2.png", "Emote"],
						["http://i.imgur.com/wnSmS.png", "Emote"],
						["http://i.imgur.com/r0Rhe.png", "Emote"],
						["http://i.imgur.com/cCChp.png", "Emote"],
						["http://i.imgur.com/UkpBz.png", "Emote"],
						["http://i.imgur.com/MRdvo.png", "Emote"],
						["http://i.imgur.com/OJHNg.png", "Emote"],
						["http://i.imgur.com/IZJSZ.png", "Emote"],
						["http://i.imgur.com/z2R9A.png", "Emote"],
						["http://i.imgur.com/djjrzly.png", "Emote"],
						["http://i.imgur.com/u91K3lE.png", "Emote"],
						["http://i.imgur.com/6amBMsZ.png", "Emote"],
						["http://i.imgur.com/8MaDTLV.png", "Emote"],
						["http://i.imgur.com/SspLS12.png", "Emote"],
						["http://i.imgur.com/SGKxDhn.png", "Emote"],
						["http://i.imgur.com/OL1DowU.png", "Emote"],
						["http://i.imgur.com/lSIizWD.png", "Emote"],
						["http://i.imgur.com/JV1WARw.png", "Emote"],
						["http://i.imgur.com/CV2Kxuv.png", "Emote"],
						["http://i.imgur.com/OVnC2UC.png", "Emote"]
					]
				},
				{
					"name" : "The Crusaders",
					"emotes" : [
						["http://i.imgur.com/DKLH4.png", "abmeh"],
						["http://i.imgur.com/6skeR.png", "abbored"],
						["http://i.imgur.com/yEdBp.png", "abwut"],
						["http://i.imgur.com/EKbat.png", "absmile"],
						["http://i.imgur.com/Ku52Y.png", "abhuh"],
						["http://i.imgur.com/JZ7Qjcd.png", "abuptosomething"],
						["http://i.imgur.com/8lobA8K.png", "abyay"],
						["http://i.imgur.com/CWD9YgU.png", "abdefeated"],
						["http://i.imgur.com/AHCUSzQ.png", "abmad"],
						["http://i.imgur.com/s9xv5RA.png", "abplead"],
						["http://i.imgur.com/K2NUEkN.png", "abpout"],
						["http://i.imgur.com/L3HMAWY.png", "abscared"],
						["http://i.imgur.com/oFJvsvt.png", "abmean"],
						["http://i.imgur.com/U60iZlB.png", "wackywavyinflatablearmflailingtubebloom"],
						["http://i.imgur.com/YeZuAdH.png", "abhuh"],
						["http://i.imgur.com/Sm8bW9r.png", "abinnocent"],
						["http://i.imgur.com/NZoImDq.png", "absurprised"],
						["http://i.imgur.com/oHyofJ3.png", "abcheerful"],
						["http://i.imgur.com/UjiYYXl.png", "cmcbiggrin"],
						["http://i.imgur.com/0V8u1Lz.png", "cmcbigsmile"],
						["http://i.imgur.com/uVj8R.png", "scootaderp"],
						["http://i.imgur.com/20x2X.png", "scootacheer"],
						["http://i.imgur.com/BxLgU.png", "scootaplease"],
						["http://i.imgur.com/gl6yp.png", "scootaloo"],
						["http://i.imgur.com/IMGC8.png", "cutealoo"],
						["http://i.imgur.com/fiITL.png", "scootapride"],
						["http://i.imgur.com/tDOuj3P.png", "scootarock"],
						["http://i.imgur.com/O7YJl8D.png", "scootabasket"],
						["http://i.imgur.com/5HOAGsD.png", "scootapost"],
						["http://i.imgur.com/kQc1R5l.png", "scootasurprised"],
						["http://i.imgur.com/sM1SH0r.png", "guiltyloo"],
						["http://i.imgur.com/rLhDpm3.png", "chicken"],
						["http://i.imgur.com/sYAzM.png", "ohcomeon"],
						["http://i.imgur.com/VViKq.png", "sbbook"],
						["http://i.imgur.com/DGsL3.png", "dumbfabric"],
						["http://i.imgur.com/dWaeV.png", "sbstare"],
						["http://i.imgur.com/inSsXQt.png", "sbscoot"],
						["http://i.imgur.com/Gh1mXeB.png", "sbrock"],
						["http://i.imgur.com/njZ7Ocd.png", "sbmischief"],
						["http://i.imgur.com/IfOQXKX.png", "sbscared"],
						["http://i.imgur.com/s461PaL.png", "sbsurprised"]
					]
				},
				{
					"name" : "Miscellaneous",
					"emotes" : [
						["http://i.imgur.com/TkVcM.png", "priceless"],
						["http://i.imgur.com/ZebG2.png", "celestiamad"],
						["http://i.imgur.com/Wtyb9.png", "celestiawut"],
						["http://i.imgur.com/j4frQ.png", "celestia"],
						["http://i.imgur.com/fIvet.png", "lunateehee"],
						["http://i.imgur.com/tkMRq.png", "lunawait"],
						["http://i.imgur.com/u9iJV.png", "lunasad"],
						["http://i.imgur.com/fH5FO.png", "lunagasp"],
						["http://i.imgur.com/0lMv9.png", "lunahappy"],
						["http://i.imgur.com/nh9dv.png", "nmm"],
						["http://i.imgur.com/Av7mi.png", "cadance"],
						["http://i.imgur.com/xJ9hG.png", "shiningarmor"],
						["http://i.imgur.com/TVh3T.png", "chrysalis"],
						["http://i.imgur.com/QwaS1.png", "spikemeh"],
						["http://i.imgur.com/YI5jr.png", "spikeletter"],
						["http://i.imgur.com/lebxZ.png", "spikenervous"],
						["http://i.imgur.com/QcNTf.png", "spikenoooo"],
						["http://i.imgur.com/qACFB.png", "spikepushy"],
						["http://i.imgur.com/BbPhC.png", "manspike"],
						["http://i.imgur.com/GmNPM.png", "allmybits"],
						["http://i.imgur.com/vBxYG.png", "spikewtf"],
						["http://i.imgur.com/pV4j88A.png", "changeling"],
						["http://i.imgur.com/VK1CV.png", "sotrue"],
						["http://i.imgur.com/Vhz4BpV.png", "ironwill"],
						["http://i.imgur.com/sHp29.png", "derpypaperbag"],
						["http://i.imgur.com/rv8JX.png", "derpyhappy"],
						["http://i.imgur.com/zI6pj.png", "derpyshock"],
						["http://i.imgur.com/BDNMW.png", "derp"],
						["http://i.imgur.com/ZQwXp.png", "grannysmith"],
						["http://i.imgur.com/cgoor.png", "swagintosh"],
						["http://i.imgur.com/wLZl0.png", "eeyup"],
						["http://i.imgur.com/P83z2.png", "macintears"],
						["http://i.imgur.com/4pRNpKu.png", "macwut"],
						["http://i.imgur.com/tF17M4z.png", "macready"],
						["http://i.imgur.com/REXzM.png", "trixiesmug"],
						["http://i.imgur.com/3Sr1ACU.png", "trixiesad"],
						["http://i.imgur.com/LbXFj.png", "trixiegap"],
						["http://i.imgur.com/6li8p6M.png", "trixiecreep"],
						["http://i.imgur.com/jorT3.png", "gilda"],
						["http://i.imgur.com/nXFjR.png", "spitfirecool"],
						["http://i.imgur.com/S46ae8h.png", "spitfire"],
						["http://i.imgur.com/GIV4g.png", "zecora"],
						["http://i.imgur.com/rTIx4.png", "photofinish"],
						["http://i.imgur.com/ZNGZn.png", "silverpout"],
						["http://i.imgur.com/UwaXc.png", "lyra"],
						["http://i.imgur.com/kXPdl.png", "bonbon"],
						["http://i.imgur.com/mmjN8.png", "octavia"],
						["http://i.imgur.com/BoPE4.png", "vinyl"],
						["http://i.imgur.com/W9ZCa.png", "punchdrunk"],
						["http://i.imgur.com/a9ddz.png", "colgate"],
						["http://i.imgur.com/xo9Mr.png", "whooves"],
						["http://i.imgur.com/MGw7s.png", "thehorror"],
						["http://i.imgur.com/lx5pI.png", "snails"],
						["http://i.imgur.com/eWyjh.png", "cockatrice"],
						["http://i.imgur.com/pjagI.png", "angelbunny"]
					]
				}
			]
		}
	];
}

require("sdk/page-mod").PageMod({
	include: "*.fimfiction.net",
	contentScriptFile: ["./js/jQuery.min.js", "./js/injection.js"],
	onAttach: function(worker) {
		worker.port.emit("addModules", ss.storage.modules);
	}
});

var uiButton = require('sdk/ui/button/action').ActionButton({
	id: "mozilla-link",
	label: "FIMFiction Emote Extender Settings",
	icon: {
		"16": "./images/icon-16.png",
		"32": "./images/icon-32.png",
		"64": "./images/icon-64.png"
	},
	onClick: uiButtonClicked
});

function uiButtonClicked() {

	var mainPanel = require("sdk/panel").Panel({
		width: 350,
		height: 500,
		position: uiButton,
		contentURL: "./mainMenu.html",
		contentScriptFile: "./js/mainMenu.js"
	});

	mainPanel.on("show", function() {
		mainPanel.port.emit("show", ss.storage.modules);
	});

	mainPanel.port.on("addModule", function() {
		mainPanel.hide();
		addModule();
	});

	mainPanel.port.on("deleteModule", function(module) {
		mainPanel.hide();
		requestDeleteModule(module);
	});

	mainPanel.port.on("save", function(modules) {
		ss.storage.modules = modules;
	});


	mainPanel.show();

}

function addModule() {

	var modulePanel = require("sdk/panel").Panel({
		width: 500,
		height: 110,
		contentURL: "./addModule.html",
		contentScriptFile: "./js/addModule.js"
	});

	modulePanel.on("show", function() {
		modulePanel.port.emit("show");
	});

	modulePanel.port.on("addURL", function(url) {
		modulePanel.hide();
		addURL(url);
	});

	modulePanel.show();
	
}

function requestDeleteModule(module) {

	var modulePanel = require("sdk/panel").Panel({
		width: 350,
		height: 225,
		contentURL: "./moduleDelete.html",
		contentScriptFile: "./js/deleteModule.js"
	});

	modulePanel.on("show", function() {
		modulePanel.port.emit("show", module);
	});

	modulePanel.port.on("cancel", function() {
		modulePanel.hide();
	});

	modulePanel.port.on("deleteModule", function() {
		modulePanel.hide();
		var removeIndex = ss.storage.modules.indexOf(module);
		ss.storage.modules.splice(removeIndex, 1);
	});

	modulePanel.show();

}

function addURL(urlTemp) {

	try {

		var Request = require("sdk/request").Request;
		var moduleRequest = Request({
			url: urlTemp,
			onComplete: function (response) {
				if (response.status == 200) {
					var module = JSON.parse(response.text);
					ss.storage.modules.push(module);
					var modulePanel = require("sdk/panel").Panel({
						width: 250,
						height: 150,
						contentURL: "./moduleAddSuccess.html"
					});
					modulePanel.show();
				} else {
					var modulePanel = require("sdk/panel").Panel({
						width: 250,
						height: 150,
						contentURL: "./moduleAddFailed.html"
					});
					modulePanel.show();
				}
			}
		});
		
		moduleRequest.get();

	} catch (e) {
		var modulePanel = require("sdk/panel").Panel({
			width: 250,
			height: 150,
			contentURL: "./moduleAddFailed.html"
		});
		modulePanel.show();
	}

}
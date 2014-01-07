define({ api: [
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/addresstohash/{ADDRESS}",
    "title": "Address To Hash",
    "version": "1.0.0",
    "name": "AddressToHash",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Shows the 160-bit hash encoded in {ADDRESS}. For BBE compatibility, the address is not checked for validity.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address to check."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/CHAIN/q/addresstohash/{ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "The hashed address"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"20B7425C2C55A745F0558906972F42FAB1CA9D10\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/checkaddress/{ADDRESS}",
    "title": "Address validity",
    "version": "1.0.0",
    "name": "Addressvalidity",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the version encoded in {ADDRESS} as a hex string. If {ADDRESS} is invalid, returns either X5, SZ, or CK for BBE compatibility.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address to check."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/CHAIN/q/checkaddress/{ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address created"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"1E\"\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "InvalidAddress",
            "optional": false,
            "description": "The address is either missing or invalid."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"SZ\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/decode_address",
    "title": "Decode Address",
    "version": "1.0.0",
    "name": "DecodeAddress",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Shows {ADDRESS}'s version byte(s) and public key hash as hex strings separated by colon (\":\").",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address created"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "AddressData",
            "optional": false,
            "description": "Version byte(s) and public key has has hex."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   1e:20B7425C2C55A745F0558906972F42FAB1CA9D10\n"
        }
      ]
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/CHAIN/q/decode_address/{ADDRESS}'\n"
      }
    ],
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/CHAIN/q/addressbalance/{ADDRESS}",
    "title": "Get Balance",
    "version": "1.0.0",
    "name": "GetBalance",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns amount of money at the given address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address to check."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/CHAIN/q/addressbalance/{ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "amount",
            "optional": false,
            "description": "The amount in the entire account"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   2321.55284575\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/getdifficulty",
    "title": "Get Difficulty",
    "version": "1.0.0",
    "name": "GetDifficulty",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current difficulty.",
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/getdifficulty'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "difficulty",
            "optional": false,
            "description": "The current difficulty"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   337.834\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/getreceivedbyaddress/{ADDRESS}",
    "title": "Get Received",
    "version": "1.0.0",
    "name": "GetReceived",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the amount of money received by given address (not balance, sends are not subtracted).",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address to check."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/getreceivedbyaddress/{ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "received",
            "optional": false,
            "description": "The amount received"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   2321.55284575\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/getsentbyaddress/{ADDRESS}",
    "title": "Get Sent",
    "version": "1.0.0",
    "name": "GetSent",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the amount of money sent from given address.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address to check."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/getsentbyaddress/{ADDRESS}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "sent",
            "optional": false,
            "description": "The amount sent"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   2312312.5525\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/getblockcount",
    "title": "Block Count",
    "version": "1.0.0",
    "name": "Get_Current_Block",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the current block.",
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/getblockcount'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "currentBlock",
            "optional": false,
            "description": "The current block"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   39405\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/hashtoaddress/{HASH}",
    "title": "Hash To Address",
    "version": "1.0.0",
    "name": "HashToAddress",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Converts a 160-bit hash and address version to an address.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address to check."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/CHAIN/q/hashtoaddress/{HASH}'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "address",
            "optional": false,
            "description": "The address decoded"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   \"Dz7YahHxKXx9aS15mM6Txk2ntLau7hrg\"\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/nethash",
    "title": "Stats",
    "version": "1.0.0",
    "name": "Stats",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns statistics about difficulty and network power.\n\n\nblockNumber:          height of last block in interval + 1\ntime:                 block time in seconds since 0h00 1 Jan 1970 UTC\ntarget:               decimal target at blockNumber\navgTargetSinceLast:   harmonic mean of target over interval\ndifficulty:           difficulty at blockNumber\nhashesToWin:          expected number of hashes needed to solve a block at this difficulty\navgIntervalSinceLast: interval seconds divided by blocks\nnetHashPerSecond:     estimated network hash rate over interval\n\nStatistical values are approximate and differ slightly from http://blockexplorer.com/q/nethash.\n\n/chain/CHAIN/q/nethash[/INTERVAL[/START[/STOP]]]\nDefault INTERVAL=144, START=0, STOP=infinity.\nNegative values back from the last block.\nAppend ?format=json to URL for headerless, JSON output.\n\nHeaders: \nblockNumber,time,target,avgTargetSinceLast,difficulty,hashesToWin,avgIntervalSinceLast,netHashPerSecond, START DATA",
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/nethash?format=json'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "statistics",
            "optional": false,
            "description": "The info about difficulty and network power."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [[500,1386475886,6901641034498895230248057944249341782018790077074986006051269912821760,69016706544110646121312590156214853227120998882806968922155747617576697,0.003,16777472,301,5579],[1000,1386481098,102835395933649441302964260321625980471269832238804165165005483802624,511646604635674070810351654692609304043970858461013446657591038336313,0.262,1125994490,11,21710728],[1500,1386502787,52529853359504190785223619957073939508190122722587178372643483025408,74497229072396294688799436972909949335238640702983859448049420638195,0.513,2204310155,44,35831851],[2000,1386525878,24135026718369459321797471742864299194208032625214124250699885707264,34964872878590649020220162976973531547996706094112403821688576531138,1.117,4797678104,47,71709088],[2500,1386547883,14238139558361065581256409594373114581989367761360958162589676732416,20401277838725253533921598926247758520653710673652986374373263559060,1.893,8132529447,45,128964491],[3000,1386578142,12337483771434372804160612128831741937815553982171552670059079925760,12509836639047558096789387030780126701199600638729796543855128570749,2.185,9385389385,61,152947606],[3500,1386604879,10847082481083088762391228669389252788390863671700881753966595014656,12014393291141663681497720688691713489763535748873466110903331156788,2.485,10674952406,54,180233025],[4000,1386632799,9045309626709872951900905841200093584963253653733900418556268380160,9880415950534523032019800031862517113158506987674760345511444343760,2.98,12801340585,56,209873812],[4500,1386660584,8398415826798841049607906955420958144204108049947717986398840553472,9118234481756712005158643876597581099550934413847782930414575790288,3.21,13787372717,56,228521853],[5000,1386689081,6881050116064891151014929372068984286309095173241371806529998553088,7280616014038002977945394096580730303195051023340418154269141052141,3.917,16827677067,57,279049742],[5500,1386722845,10496440565135555789316594831029949402707506367442507443339658264576,8158069466947333834555705538235060672194766150014467566075649009959,2.568,11031557652,68,210187847],[6000,1386747831,5239533978969535922723855339424824546905819415438360834998607544320,6624519508699486521753737349547599481461328518053604796578009095292,5.145,22099692396,50,349782256],[6500,1386775649,4419180858809011574127754897550014650180017131691288613027407986688,4809662470429476958372553140982185763351325194848420655736909193663,6.1,26202161200,56,432721418],[7000,1386806037,4357125732353862146657150947430075973958417218680378502106574749696,4533691604386460560138061291802062672323799104318801107447915741548,6.187,26575338043,61,420237497],[7500,1386832869,3814448292365202799694150471187634292623246567852985316489782362112,4315734526787440543864952287779920402474738706773605163444482181557,7.067,30356182693,54,499966754],[8000,1386862884,3777667087470158771277270500856037421814115863528290971282569166848,3548454036309469210330426995040040027780693364558881989779901531053,7.136,30651745258,61,543589879],[8500,1386894675,3871141066566659976615270893805430509240229889473642247719214907392,3388946274754583295161771571071556513216301423078237515778477033862,6.964,29911617077,64,537378171],[9000,1386921194,2780489718795463650741083634264190674631975406751347791300476796928,3418299747221028838682165653615131314488917858151210059542318004514,9.696,41644494656,54,638677487],[9500,1386949902,2745533995518697835277219332869493364539309925027590698754165964800,2788431694392297033610930986059784317291046777289883355773000895768,9.819,42174706059,58,723245843],[10000,1386976507,2144802704805093946629714392117042501862819646643806556376440766464,2325478444542225882919020467550244866436975778408736955615561833669,12.569,53987291687,54,935779038],[10500,1387003002,1730526042304904958643618854901029077119583103831633649471569526784,1856598312990342071519186448923778809779477781401424507004626670084,15.579,66911497664,53,1176974406],[11000,1387032616,1481600090682877552030240133062736601850676204673722559733539274752,1531202847370140809838784905384811956300037974371828537508057208183,18.196,78153403179,60,1276788887],[11500,1387059151,1199095561688014284619136571342883192839465351757726230909051469824,1370636565415873413154004139550342952861856296495475464150491934508,22.483,96566189498,54,1591869598],[12000,1387087438,1034668840185301622654856384168258411861585974824889519622508773376,1156424702680152029360348922451175155204863049979170439313709247053,26.056,111912222288,57,1769883349],[12500,1387112572,692405499200535024876898336158421847987779436976098690838833397760,920118513778008149262480810973164225048699465462541830199192229845,38.936,167231614091,51,2503476472],[13000,1387136994,457798972490899480608874038524981472669947888695786068056173707264,649039161709069694475286189140883400420634934686728403164870663514,58.89,252932173716,49,3652555009],[13500,1387164357,379475205275672035588683264182180866260413192575818962470749339648,424407296257336198841087496672113915283802855296047098008344650080,71.045,305137430924,55,4985426781],[14000,1387191530,307286727513425415440511701107938818667308267486114559930505625600,343971804695663695459614382620706339621238918787829881790915530137,87.735,376820991177,55,6194246163],[14500,1387221926,338467753324226862747127933547726737806649094377475872106693525504,320457255640988762492486429928319907637577818241791986645488096156,79.652,342106709132,61,5943774841],[15000,1387248986,243668050341211990431805421872152191233454250962253791580924149760,276067279861145905211571342420954949445253621259181810398906193571,110.642,475204234101,55,7750079650],[15500,1387279568,249774414909396153478864877823048609123038622338628404355069378560,242504581277946239970142715646623921194720355874727803295964853014,107.937,463586669913,62,7806620412],[16000,1387309712,242131817570900395728387306111874039785443024900197441630376034304,253927698473259381053033115004123353785612135251362050632092498010,111.344,478219221244,61,7563763426],[16500,1387337230,223716307583692367170676420533644316360538578591446635737822265344,245088663767953799425008519420308054961467118702389477848107326652,120.509,517584482275,56,8584377428],[17000,1387363763,177115104300181649179959519855750600887394691771745643514082361344,195620709563519635661740341476672787241095446113835062886931496947,152.217,653767445158,54,11154438347],[17500,1387397828,195043712059979203684181190920000952043734910573380263177539813376,181661717374784975527353348902626565982680762928503500443910489328,138.225,593672505585,69,9355717195],[18000,1387421658,132241359414249345735450228427123635211962173170361153588291436544,196928585389957530548396456754761105136296450752311216141784789357,203.869,875611758304,48,12337185385],[18500,1387450373,119851867093012530711021700695173271546515988088295820828117827584,130535174035332382092287171494664829566376614349837777504521759037,224.943,966126703286,58,15445875188],[19000,1387479231,111156725335527134330064143813515240704268347688937128796302082048,114185544413762526790947866218846036288018881840531563126297819199,242.539,1041701155623,58,17569990973],[19500,1387505638,84973276842371146780383413480908337258771572108240302337901461504,105055992020253694005891655467939620558247034951200005180866280453,317.275,1362688289073,53,20869353754],[20000,1387534464,81630845710312447007256132328838719045525389881172093240474599424,84966740794499587722756359731467197726146870221240031422971775807,330.266,1418484498472,58,23638262568],[20500,1387564774,78561594045777775580970984732467098474707982163046958925048971264,74777723519279390491510005292318400393607366733674317311398858034,343.169,1473901982816,61,25544106621],[21000,1387593136,67634415344816641707285642504547192777557001805323967644999614464,76542461989894747240954604351230881133233598664614592327627723334,398.612,1712029129652,57,26669177041],[21500,1387627043,83387228992687523378423496895767609770082157753376685809459003392,73404403901898634520363167266599126912139323201848471618278710126,323.31,1388606992174,68,23261483683],[22000,1387655643,78738357230646264511280600562624626360985424492363066136932122624,82689865171273008981809465269629969259523667976706756642227180937,342.399,1470593155736,58,24481080241],[22500,1387684851,79112773794958609245481877730140117247373097789914456867557343232,79155683234822575958404032425908940690328538152890020992872637514,340.778,1463633288063,59,25041767123],[23000,1387718706,86146341614680209681529045808317385958612780293701741107671465984,78699219902380974077804022734421381552409550709663312874038216607,312.955,1344132403848,68,21729795976],[23500,1387746707,80073722745425485430255971061360132483681375180196566983067566080,87794413709561307102753979583050797916378193862398266866016764780,336.689,1446068513705,57,23550952133],[24000,1387777985,90017455363300117255309632488767246668088767305724489047912480768,86059306618530979570417908149547306649811781145621676204463588640,299.496,1286329287691,63,21508596701],[24500,1387806287,78807455566549401093128904932595296352893879221095726228850081792,86186049496192886930483952659647302265476279050021332744197881268,342.098,1469303740425,57,23735303712],[25000,1387836151,81278926278619728136912442630616004435573027425533661609543598080,79996601046218917360948915017500051430381883561115515536841678799,331.696,1424626216645,60,24234238777],[25500,1387864159,67025385826042484392855238871549892151201086870680289160420392960,77110115990378756323056186140786503303734354092196998827751448344,402.234,1727585567919,57,26807446020],[26000,1387893795,65024747960940041499805496066585144711060944143420712080470179840,66440873388990791768144786542223052839367492913877403407468764309,414.61,1780738762830,60,29403157850],[26500,1387924225,66538483598632010339366024357570519882636859363564102931324076032,63882101727905179803304751276131090316735194533719850043559382144,405.178,1740227353779,61,29782952298],[27000,1387952095,57502670975763708019993571512336162568654511929523458818424438784,64353552925031999149593112378011392431043376511659227672640522338,468.846,2013681925942,56,32280436341],[27500,1387982776,57104150340787478431659164913435554243229005587065326195269697536,58937328409501123247457986948748711404564009361936245361777709389,472.118,2027735086614,62,32017612042],[28000,1388013114,62836098344659296744517343696816481246425703665888548238789705728,60775558689937521202797470374784579268048663868398659929162687119,429.051,1842763829832,61,31400241442],[28500,1388043228,55241709147491308702306030848412146786905772317271069299155402752,58229293282961328368250570938956317737290947230888605480003523809,488.036,2096098962618,61,33017100300],[29000,1388075043,57206994375620053809293850487345388649790426578667424936728985600,59817264773037895937887141541194439269444431025518018133806999690,471.27,2024089720166,64,30422185932],[29500,1388103339,71055586441044032003914479799141527958326771979087533591356243968,70963781425809947966252268738179124246950936512354006730340218149,379.42,1629598671082,57,28832818487],[30000,1388133665,55452218031289236428402027882508839087836180909456615160579883008,66484485808630397730273091673819514279450768685995878856870582262,486.183,2088141707370,61,28715306051],[30500,1388165522,61413958175490090350662707245094552343193554016390776579547987968,58758158970338598017404712863955919790414616352648924829345122676,438.987,1885436025902,64,30929709350],[31000,1388196430,65751083956945105104350462932323350207400979896610534442026401792,66632896014283439286657609212600892238538064257995899771050477574,410.03,1761067381233,62,28111841897],[31500,1388225598,60006280448719214869287948452203693903384104193837050055823982592,59456815636927102085576286225309956327159855715639920431849478132,449.285,1929666167798,59,33384171078],[32000,1388255897,58171157202175447974619027742750086211303748374937100637909811200,60726969487488709142126434401839221214467675906628019138495830235,463.459,1990541271765,61,31465815404],[32500,1388287354,69545064679440581144905035432340835111955901164931708326172950528,65679241034558722523054102510230955311234664921302470456738976989,387.661,1664993623502,63,28022279879],[33000,1388319215,75522874204084024969921134415849959993338496301803697673494069248,67764550063875138868757186888140416184699564188576196620051624606,356.977,1533205541468,64,26815563809],[33500,1388347598,70194267649321213216223988117646664803374871174419956631634706432,73528236777350207575731460704966196801441239107077235620980580051,384.076,1649594662284,57,27741915559],[34000,1388378337,73406536799794934777032370340236648845816754958991759509402157056,69113964232931899903792522650520122050075209858664125837607530495,367.269,1577408420085,62,27251684695],[34500,1388409878,72815183599507626355632928290255101008088584257279691746011250688,71740889796131680920243950347239850819566535076218041395066617915,370.251,1590219010834,64,25586252238],[35000,1388439361,77451199857194813300571488926659355116365139894343049075855720448,78315312221928463998523871615576016872533636081016588554961083114,348.089,1495032865221,59,25074399336],[35500,1388470462,81065203518733282430265361672334629809437574427360550162448515072,77830675832046046041395249224423844753903662552815369198779630865,332.571,1428382144387,63,23917938202],[36000,1388499584,75580723973677348619840645051174241847029295609579878215564918784,79581348558493082391141117117538002237408237463006915855718402557,356.704,1532032020196,59,24981378669],[36500,1388530886,82039007973554230537243790700293374346566029441592922620641148928,75426074738922849246006445999315672413884321568191841502831166230,328.623,1411427223433,63,24521966799],[37000,1388559136,70604036850607255736487188451193661267018032937834568804636557312,80390145754893941660923322136423289348164565993322578951025075163,381.847,1640020803375,57,25493392123],[37500,1388588846,69868059226336638190288969812901408795062863966682049686068527104,75817581512344367100750169969620816734398660330311202312359992652,385.869,1657296488832,60,25702556095],[38000,1388620041,68863722948674769268075243505188182168486487095567804164005167104,71577604336121394266871434744646607828670009995807631368259001083,391.497,1681467168477,63,25929058386],[38500,1388649714,68318970951670971564666518355884528046231460280675437392838000640,71864799993353650254537732855243703430757818190336012151802003751,394.618,1694874609853,60,27150086432],[39000,1388682262,77896321695454553606896612426237857157263790123620882691234201600,71269474881935316449064287318328937031699376763809130292190967379,346.1,1486489820277,66,24958646391],[39500,1388710769,83776107999398199025104651722114171119892530877872121675601936384,83591536806806189786532958970544829784893048061538918434312386542,321.809,1382161239074,58,24296016222],[40000,1388740613,78942438362267156276274429748351954011505744272573480827015397376,80884207714262138300366954929358796375865874157899303327887643162,341.513,1466791394331,60,23984359612],[40500,1388773764,91129456489927338525984670256667331189034131777422181689941032960,77991173651685550947914992834625861616658796516489132458532047814,295.842,1270632940185,67,22392717696]]\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/totalbc",
    "title": "Total Mined",
    "version": "1.0.0",
    "name": "TotalMined",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the amount of currency ever mined.",
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/totalbc'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "field": "total",
            "optional": false,
            "description": "The current total currency ever mined."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   20348786236.90000153\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "type": "get",
    "url": "/chain/Dogecoin/q/transactions",
    "title": "Transactions",
    "version": "1.0.0",
    "name": "Transactions",
    "group": "DogeCoin",
    "permission": {
      "name": "public",
      "title": "This information is publicly accessible.",
      "description": "No authentication is required.\n"
    },
    "description": "Returns the amount transactions of the last blocks.",
    "examples": [
      {
        "title": "CURL example:",
        "content": "    curl -X GET 'http://dogechain.info/chain/Dogecoin/q/transactions'\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "transactions",
            "optional": false,
            "description": "The amount transactions of the last blocks."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (example):",
          "content": "   HTTP/1.1 200 OK\n   [\n     [\n       500,\n       1386475886,\n       1\n     ],\n     [\n       1000,\n       1386481098,\n       1\n     ],\n     [\n       1500,\n       1386502787,\n       5\n     ],\n     [\n       2000,\n       1386525878,\n       1\n     ],\n     [\n       2500,\n       1386547883,\n       20\n     ],\n     [\n       3000,\n       1386578142,\n       3\n     ],\n     [\n       3500,\n       1386604879,\n       17\n     ],\n     [\n       4000,\n       1386632799,\n       2\n     ],\n     [\n       4500,\n       1386660584,\n       3\n     ],\n     [\n       5000,\n       1386689081,\n       7\n     ],\n     [\n       5500,\n       1386722845,\n       7\n     ],\n     [\n       6000,\n       1386747831,\n       2\n     ],\n     [\n       6500,\n       1386775649,\n       2\n     ],\n     [\n       7000,\n       1386806037,\n       3\n     ],\n     [\n       7500,\n       1386832869,\n       20\n     ],\n     [\n       8000,\n       1386862884,\n       15\n     ],\n     [\n       8500,\n       1386894675,\n       14\n     ],\n     [\n       9000,\n       1386921194,\n       20\n     ],\n     [\n       9500,\n       1386949902,\n       35\n     ],\n     [\n       10000,\n       1386976507,\n       40\n     ],\n     [\n       10500,\n       1387003002,\n       4\n     ],\n     [\n       11000,\n       1387032616,\n       117\n     ],\n     [\n       11500,\n       1387059151,\n       140\n     ],\n     [\n       12000,\n       1387087438,\n       12\n     ],\n     [\n       12500,\n       1387112572,\n       96\n     ],\n     [\n       13000,\n       1387136994,\n       95\n     ],\n     [\n       13500,\n       1387164357,\n       203\n     ],\n     [\n       14000,\n       1387191530,\n       15\n     ],\n     [\n       14500,\n       1387221926,\n       31\n     ],\n     [\n       15000,\n       1387248986,\n       104\n     ],\n     [\n       15500,\n       1387279568,\n       37\n     ],\n     [\n       16000,\n       1387309712,\n       196\n     ],\n     [\n       16500,\n       1387337230,\n       22\n     ],\n     [\n       17000,\n       1387363763,\n       11\n     ],\n     [\n       17500,\n       1387397828,\n       113\n     ],\n     [\n       18000,\n       1387421658,\n       135\n     ],\n     [\n       18500,\n       1387450373,\n       10\n     ],\n     [\n       19000,\n       1387479231,\n       126\n     ],\n     [\n       19500,\n       1387505638,\n       26\n     ],\n     [\n       20000,\n       1387534464,\n       44\n     ],\n     [\n       20500,\n       1387564774,\n       49\n     ],\n     [\n       21000,\n       1387593136,\n       60\n     ],\n     [\n       21500,\n       1387627043,\n       73\n     ],\n     [\n       22000,\n       1387655643,\n       482\n     ],\n     [\n       22500,\n       1387684851,\n       136\n     ],\n     [\n       23000,\n       1387718706,\n       32\n     ],\n     [\n       23500,\n       1387746707,\n       31\n     ],\n     [\n       24000,\n       1387777985,\n       19\n     ],\n     [\n       24500,\n       1387806287,\n       99\n     ],\n     [\n       25000,\n       1387836151,\n       136\n     ],\n     [\n       25500,\n       1387864159,\n       105\n     ],\n     [\n       26000,\n       1387893795,\n       34\n     ],\n     [\n       26500,\n       1387924225,\n       100\n     ],\n     [\n       27000,\n       1387952095,\n       12\n     ],\n     [\n       27500,\n       1387982776,\n       79\n     ],\n     [\n       28000,\n       1388013114,\n       82\n     ],\n     [\n       28500,\n       1388043228,\n       124\n     ],\n     [\n       29000,\n       1388075043,\n       50\n     ],\n     [\n       29500,\n       1388103339,\n       89\n     ],\n     [\n       30000,\n       1388133665,\n       156\n     ],\n     [\n       30500,\n       1388165522,\n       66\n     ],\n     [\n       31000,\n       1388196430,\n       34\n     ],\n     [\n       31500,\n       1388225598,\n       60\n     ],\n     [\n       32000,\n       1388255897,\n       151\n     ],\n     [\n       32500,\n       1388287354,\n       35\n     ],\n     [\n       33000,\n       1388319215,\n       11\n     ],\n     [\n       33500,\n       1388347598,\n       90\n     ],\n     [\n       34000,\n       1388378337,\n       43\n     ],\n     [\n       34500,\n       1388409878,\n       270\n     ],\n     [\n       35000,\n       1388439361,\n       28\n     ],\n     [\n       35500,\n       1388470462,\n       50\n     ],\n     [\n       36000,\n       1388499584,\n       19\n     ],\n     [\n       36500,\n       1388530886,\n       10\n     ],\n     [\n       37000,\n       1388559136,\n       46\n     ],\n     [\n       37500,\n       1388588846,\n       98\n     ],\n     [\n       38000,\n       1388620041,\n       82\n     ],\n     [\n       38500,\n       1388649714,\n       11\n     ],\n     [\n       39000,\n       1388682262,\n       15\n     ],\n     [\n       39500,\n       1388710769,\n       69\n     ],\n     [\n       40000,\n       1388740613,\n       51\n     ],\n     [\n       40500,\n       1388773764,\n       122\n     ]\n   ]\n"
        }
      ]
    },
    "filename": "src/index.js"
  },
  {
    "version": "1.0.0",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  },
  {
    "version": "1.0.0",
    "group": "index.js",
    "type": "",
    "url": "",
    "filename": "src/index.js"
  }
] });
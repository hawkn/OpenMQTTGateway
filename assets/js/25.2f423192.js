(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{250:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"upload-with-platformio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upload-with-platformio"}},[e._v("#")]),e._v(" Upload with PlatformIO")]),e._v(" "),n("p",[e._v("This section is usefull if you want to do advanced configuration of your project or if you choose an Arduino. Indeed the ESP family can be loaded directly without any configuration from your desktop.\nAdvanced configurations means changing the default used pins, the MQTT subjects and all the expert parameters that you can find in "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/main/User_config.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("user_config.h"),n("OutboundLink")],1),e._v(" and in all "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/tree/development/main",target:"_blank",rel:"noopener noreferrer"}},[e._v("config_XX.h"),n("OutboundLink")],1),e._v(".\nIf you don't have to change the default parameters except wifi and broker setting you can go directly to the "),n("a",{attrs:{href:"load"}},[e._v("Load")]),e._v(" section.")]),e._v(" "),n("p",[e._v("Download the "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("CODE"),n("OutboundLink")],1),e._v(" from github.")]),e._v(" "),n("p",[e._v("So as to configure OpenMQTTGateway you have the choice between 2 development environments:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arduino IDE"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://platformio.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlatformIO"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("I advise to use PlatformIO, this way you will not have to search for all the necessary libraries and adequate forks/revisions. If you really want to use Arduino you need to download the libraries listed "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/d2dd6138558909b71cc44f69665340247bd5f356/platformio.ini#L55",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(" at the version or revision specified.")]),e._v(" "),n("p",[e._v("With PlatformIO")]),e._v(" "),n("ul",[n("li",[e._v('Open the folder named "OpenMQTTGateway"')]),e._v(" "),n("li",[e._v("Open the platformio.ini file and uncomment the default_envs line corresponding to your board and choosen module like below.")])]),e._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = sonoff-basic-rfr3")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = rfbridge")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = esp32dev-all")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("default_envs")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" esp32dev-rf")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = esp32dev-ir")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = esp32dev-ble")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v(";default_envs = ttgo-lora32-v1")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v("If you don't know which env to activate you can refer to "),n("a",{attrs:{href:"prerequisites/devices"}},[e._v("devices")]),e._v(".")]),e._v(" "),n("p",[e._v("The different listed configurations represents some standard environments, to overload them with special parameters or modules you can modify the config files. The definitions coming from "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/platformio.ini",target:"_blank",rel:"noopener noreferrer"}},[e._v("platformio.ini"),n("OutboundLink")],1),e._v(" file and config files are cumulative.\nThe main config file is "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/main/User_config.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("user_config.h"),n("OutboundLink")],1),e._v(", added to it you have one config file per gateway, sensor or actuator, you will find them in the "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/tree/development/main",target:"_blank",rel:"noopener noreferrer"}},[e._v("main"),n("OutboundLink")],1),e._v(" folder.")]),e._v(" "),n("p",[e._v("If you want to add more sensors or gateways to one "),n("code",[e._v("default_envs")]),e._v(" you can uncomment them into "),n("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/d2dd6138558909b71cc44f69665340247bd5f356/main/User_config.h#L84",target:"_blank",rel:"noopener noreferrer"}},[e._v("user_config.h"),n("OutboundLink")],1),e._v(" or add the modules directly into your environment definition of your .ini files.")]),e._v(" "),n("p",[e._v("Example to add IR to "),n("code",[e._v("esp32dev-rf")]),e._v(" add the "),n("code",[e._v("build_flags")]),e._v(" below to the env definition:")]),e._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayIR")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"IR"\'')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[env:esp32dev-rf]")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("platform")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" ${com.esp32_platform}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("board")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" esp32dev")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("lib_deps")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")])]),e._v("\n  ${com-esp.lib_deps}\n  ${libraries.rc-switch}\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("build_flags")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" ")]),e._v("\n  ${com-esp.build_flags}\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayRF")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"RF"\'')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DZgatewayIR")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"IR"\'')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("  '-DGateway_Name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v('"OpenMQTTGateway_ESP32_RF_IR"\'')]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v("You can define your environment into an additionnal "),n("code",[e._v("production_env.ini")]),e._v(" file than "),n("code",[e._v("platformio.ini")]),e._v(", when building PIO will scan for all the")]),e._v(" "),n("div",{staticClass:"language-ini line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[e._v("*_env.ini\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("This way when updating the code your environments definition will not be overwritten.")]),e._v(" "),n("p",[e._v("Once your configuration is done you can upload the program to your board by clicking on the white arrow at the blue bottom bar of your PIO editor or with the following command:\n"),n("code",[e._v("pio run --target upload")])]),e._v(" "),n("p",[e._v("PIO will download the necessaries platform and libraries with the correct versions, build the code and upload it.")]),e._v(" "),n("p",[e._v("If you encounter errors the first thing to do is to clean your environment by using the white dust bin in the blue bottom bar.")]),e._v(" "),n("p",[e._v("With some ESP it could be necessary to push the reset button when the upload begin.")]),e._v(" "),n("p",[e._v("If you want to erase the settings stored in the ESP memory use:\n"),n("code",[e._v("pio run --target erase")])]),e._v(" "),n("p",[e._v("Once done the gateway should connect to your network and your broker, you should see it into the broker in the form of the following messages:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("home/OpenMQTTGateway/LWT Online \nhome/OpenMQTTGateway/version\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("h1",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),n("p",[e._v("With the V0.9 we added the support of json for receiving and publishing.\nPer default Json reception and Json publication is activated, the previous simple reception mode is also activated to avoid regression on commands.")]),e._v(" "),n("p",[e._v("You can deactivate Json or simple mode following theses instructions:")]),e._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('#define jsonPublishing true //comment if you don\'t want to use Json  publishing  (one topic for all the parameters)\n//example home/OpenMQTTGateway_ESP32_DEVKIT/BTtoMQTT/4XXXXXXXXXX4 {"rssi":-63,"servicedata":"fe0000000000000000000000000000000000000000"}\n//#define simplePublishing true //comment if you don\'t want to use simple publishing (one topic for one parameter)\n//example \n// home/OpenMQTTGateway_ESP32_DEVKIT/BTtoMQTT/4XXXXXXXXXX4/rssi -63.0\n// home/OpenMQTTGateway_ESP32_DEVKIT/BTtoMQTT/4XXXXXXXXXX4/servicedata fe0000000000000000000000000000000000000000\n#define simpleReceiving true //comment if you don\'t want to use old way reception analysis\n#define jsonReceiving true //comment if you don\'t want to use Json  reception analysis\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("If you are using platformio you can also comment the definitions above and define your parameters into platformio.ini file by setting the following "),n("code",[e._v("build_flags")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  '-DjsonPublishing=true'\n  '-DjsonReceiving=true'\n  '-DsimpleReceiving=true'\n  '-DsimplePublishing=true'\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("Note that depending on the environment the default platformio.ini has common option defined see sections:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[com-arduino]\n[com-esp]\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("If you want to use HASS MQTT discovery you need to have\n"),n("code",[e._v("#define jsonPublishing true")]),e._v("\n&\n"),n("code",[e._v('#define ZmqttDiscovery "HADiscovery"')]),e._v("\nuncommented.\nAdded to that auto discovery box should be selected into your Home Assistant MQTT integration configuration.")])])}),[],!1,null,null,null);t.default=s.exports}}]);
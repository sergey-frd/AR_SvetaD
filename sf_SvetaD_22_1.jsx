var location = "e:\\Git\\P_h_o_t_o\\AE_JSX\\AR_SvetaD\\log\\";
var scr_name = "SvetaD_22_1";




//#include "sf_scr_global_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_1.jsx"
// #include "sf_scr_lib_SvetaD_1.jsx"


#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\json2.js"

#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_compos_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_final_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_folder_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_prop_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_sys_1.jsx"

#include "sf_scr_lib_SvetaD_1.jsx"


// global vars
var durationSec     = 5;
var rotationEnable  = 1;

// global vars
//var location = "C:\\data";
//var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";


//===================================================
function main() 
{

    lg.open("w","UTF-8")
    lg.writeln("====================");
    lg.writeln(scr_name + " Date: " + new Date().toString());

    var influenceIn = getRandomInt(0, 10);
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    var random = Math.round(Math.random());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());

    // lg.writeln("====================");
    // for (var i = 0; i < SvetaDVideoList.length; i++) {
    //     //var comp = SvetaDVideoList[i]; 
    //     lg.writeln('i: ' +  String(i) + ' name: ' +   SvetaDVideoList[i] );
    // } // for
    // 
    // lg.writeln("====================");
    // for (var i = 0; i < SvetaDVdLst.length; i++) {
    //     //var comp = SvetaDVideoList[i]; 
    //     lg.writeln('i: ' +  String(i) + ' name: ' +   SvetaDVdLst[i] );
    // } // for

    // AAAAAAAAAAAAAAAAAAAAAAAAAAAA
    genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AR_SvetaD\\xml\\gen_svetad_22_4.xml");
    
    lg.writeln(" genXml: " + genXml.toString());
    var logName       = genXml.logName;
    var pathRrXml     = genXml.pathRrXml;
    lg.writeln(" pathRrXml: " + pathRrXml.toString());
    
    myXml = readXmlae_maya22_3_1(pathRrXml);
    lg.writeln(" myXml: " + myXml.toString());
    
    handleXmlmaya_2(myXml);
    lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    
    filePathUrlA = filePathUrl;
    
    handleFolders() ;
    handleNewComposit2();
    
    var compFinalName = "aeFinalSvetaDAll_1";
    finalComp = handleFinalCompAll(compFinalName);
    
    var compFinalName = "aeFinalSvetaD_1";
    finalComp = handleFinalComp4(compFinalName);
    
    var compFinalName = "aeFinalSvetaDBaseBg_1";
    finalComp = handleFinalCompBaseBg(compFinalName);
    
    var compFinalName = "aeFinalSvetaDBg_1";
    finalComp = handleFinalCompBg(compFinalName);
    
    
    var compFinalName = "aeFinalSvetaDBase_1";
    finalComp = handleFinalCompBase(compFinalName);
    
    
    var compFinalName = "aeFinalSvetaDBaseBi_1";
    finalComp = handleFinalCompBi(compFinalName);



    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group


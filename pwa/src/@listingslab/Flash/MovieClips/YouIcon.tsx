import React from "react";
const YouIcon = props => {
    const { color } = props;
    let c = `#ffffff`;
    if (color) {
        c = color;
    }
    return (
        <React.Fragment>
            <svg width="24px" height="24px" viewBox="0 0 24 24">
                <g id="youicon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="you">
                        <rect fill="none" x="0" y="0" width="24" height="24"></rect>
                        <path d="M17.4451207,5.75217722 C17.4246896,5.71984562 17.399699,5.69201171 17.3730201,5.66684818 L17.3730201,5.5360217 C17.3730201,4.1377774 16.0377319,3 14.3963619,3 C13.141128,3 12.067572,3.6662918 11.6304295,4.60474057 C11.1014322,4.33641914 10.2408066,4.05761077 9.2440629,4.34425234 C8.02345281,4.69573545 7.54291161,5.79983775 7.36845229,6.40081017 C6.85380594,6.42730868 5.92968159,6.56729992 4.97888694,7.1645904 C3.86884844,7.86138733 3.78831878,9.28582763 3.8356078,10.0562635 C3.46565548,10.1014282 2.96551571,10.2182564 2.51838805,10.5125606 C1.55527404,11.1455314 2.20263656,12.9527577 2.34328899,13.3120783 L3.57016682,16.3675832 C3.59228632,16.4224156 4.1336151,17.7191952 5.77165672,18.3009686 C6.30826178,18.4916278 6.95699456,18.6766169 7.61432927,18.6766169 C8.35910978,18.6766169 9.11491286,18.4387963 9.73036178,17.7030125 C9.84500956,17.7148451 9.9630376,17.7235116 10.0873118,17.7235116 C10.0960922,17.7235116 10.1052098,17.7225116 10.1139903,17.7225116 C9.47420526,18.6579739 9.51068784,19.6767599 9.88739202,20.3357134 C10.1291885,20.7586937 10.5003338,21 10.8814125,21 C10.9700599,21 11.058876,20.9868342 11.1466762,20.9601688 C11.6588155,20.8045116 14.822382,20.6056864 16.6960042,20.5175244 C16.7353466,20.5156912 16.7740138,20.5088584 16.8114992,20.4975254 C16.9784935,20.4463622 18.5271744,19.8728742 21.3852209,15.5249757 C22.4859659,13.8507346 21.8723757,12.4614499 21.3639456,11.9205065 L17.4451207,5.75217722 Z M13.9994992,4 C15.1024977,4 16,4.68100445 16,5.51752173 L16,7.35732308 C16,8.23248829 15.0805104,9 14.0318458,9 C13.076331,9 12.1999703,8.36813649 12.0311759,7.61656454 C12.0447197,7.29538628 12.3268282,6.82278025 12.7954017,6.56401938 C13.3270702,6.27053146 13.9685902,6.30792182 14.6512518,6.67321879 C14.870101,6.79055228 15.1482481,6.7173375 15.2721377,6.50989227 C15.3960147,6.30244703 15.3190467,6.03914854 15.0997028,5.92180304 C13.795521,5.22357724 12.8083362,5.55759942 12.3361178,5.818551 C12.2167018,5.88456887 12.1060383,5.96295006 12,6.04680203 L12,5.51770596 C11.9991747,4.68086828 12.896023,4 13.9995288,4 L13.9994992,4 Z M9.11892416,16.9006094 C7.91421533,16.3428015 7.24946641,15.6760461 7.10003946,15.5152633 L5.72563141,12.6194683 C5.62077752,12.3985939 5.34572734,12.3002855 5.11067707,12.3976441 C4.87547551,12.4961109 4.76994732,12.7548814 4.87480121,12.975423 L6.27605164,15.9275184 C6.29175422,15.9608159 6.3115091,15.9917341 6.3353167,16.0194824 C6.36689087,16.0573782 7.13008478,16.9551562 8.71754618,17.6900647 C8.72024771,17.6913331 8.731898,17.695773 8.74017159,17.6992611 C8.15024421,18.1037469 7.34687445,18.0978814 6.15867736,17.6957727 C4.92898479,17.2801973 4.52224265,16.3895394 4.50702764,16.355605 L3.28204654,13.4529906 C2.99669597,12.7602567 2.90940418,11.9595089 3.10594146,11.8363138 C3.66007899,11.4895409 4.38746015,11.5247418 4.3933819,11.5250584 C4.53706864,11.5359991 4.67670525,11.4795514 4.77210162,11.3787059 C4.86766658,11.2783354 4.90835808,11.1408643 4.88202142,11.0083088 C4.87864451,10.9908671 4.54956483,9.25906028 5.54996895,8.66131039 C6.67229197,7.99061764 7.75744195,8.06859384 7.76621652,8.0697304 C8.01593717,8.09303883 8.23762244,7.92639382 8.27155364,7.69410105 C8.27341096,7.6810992 8.47670124,6.38121075 9.57554905,6.07994091 C10.4410324,5.84321149 11.1745082,6.18934708 11.4902628,6.37946126 L11.4902628,8.23842852 C11.4902628,8.36210665 11.5059654,8.48340612 11.5282532,8.60343508 C11.5292663,8.60914305 11.5301105,8.61485143 11.5316301,8.62071811 C11.6378326,9.15997571 11.9591459,9.65470447 12.4173857,10.0337881 L13.3811614,12.8518911 C13.4205026,12.9670044 13.5088076,13.0619844 13.6258205,13.1136736 C14.7724356,13.6217163 15.881921,14.2854273 15.9940452,14.5115624 C16.0472329,14.7888833 15.733177,15.3867955 15.4881894,15.7343802 C15.4552645,15.752139 15.3674635,15.7905101 15.1947343,15.8225408 C15.1010236,15.8260292 14.8896301,15.8376039 14.6044611,15.8699517 C14.1662948,15.8729643 13.5348287,15.8230198 12.6296221,15.6498688 C10.1614192,15.1771812 9.91642296,13.7261988 9.90799419,13.6692895 C9.90512382,13.6455054 9.90005861,13.6223577 9.89313578,13.5998416 L8.5766485,9.29471095 C8.50590303,9.06241818 8.24790489,8.92875455 8.00055294,8.9950323 C7.75319234,9.06194326 7.6103528,9.30406729 7.68143542,9.53636005 L8.98983973,13.8147003 C9.04083162,14.0978907 9.42446164,15.6150129 11.6913683,16.3158245 C11.4634284,16.6397647 11.1780779,16.864134 10.8390252,16.9847719 C10.0218236,17.2747776 9.1193402,16.900577 9.11882151,16.900577 L9.11892416,16.9006094 Z M12.998717,19.81237 C12.2380403,19.8687132 11.5172738,19.9327916 11,20 C11.0249058,19.7961689 11.0842249,19.626583 11.1863169,19.5028429 C11.4867085,19.1369772 12.1435751,19.0741856 12.6713617,19.0243049 L12.8555906,19 C12.9419035,19.0696029 13.0101595,19.4284687 12.9987511,19.8123643 L12.998717,19.81237 Z M20.5129711,14.4265066 C17.9880426,17.9898591 16.5396407,18.7574498 16.2963193,18.8683829 C15.9380587,18.8843903 14.904058,18.9322522 13.7892002,19 C13.7916722,18.6184068 13.7277529,18.0516878 13.3733797,17.7237729 C13.1630872,17.5289363 12.8731763,17.4408149 12.5661203,17.4695954 L12.4137405,17.4838243 C11.8120138,17.5381525 10.9030052,17.6198083 10.3673184,18.2363479 C10.212466,18.4146935 10.1044066,18.6242453 10.0396052,18.8611329 C9.96791966,18.5778479 9.8911082,17.8193554 10.8045104,17.0726682 C11.8829807,16.1907916 13.4078641,15.8945838 14.2451375,15.7954891 C15.3508192,15.7768945 15.7344923,15.483912 15.8621422,15.3133441 C15.8626719,15.312859 15.8626719,15.3120506 15.8632016,15.3115655 C15.955549,15.1888437 16.2638389,14.7598804 16.4501021,14.2715679 C16.8362612,13.5323314 16.8809297,12.553761 16.5500388,11.9199523 C16.4345617,11.6973038 16.1430461,11.603524 15.900805,11.7097548 C15.6580215,11.8159856 15.5552597,12.0826141 15.6712657,12.3046127 C15.6885694,12.3377594 15.7011061,12.3757589 15.7148782,12.4129463 C15.16432,12.0371771 14.4317341,11.6730475 13.7493222,11.3708377 L13.1231866,9.58493935 C13.4205287,9.66675664 13.7341344,9.71202809 14.0558358,9.71202809 C15.724235,9.71202809 17.1343058,8.52570647 17.1343058,7.12223749 L17.1344823,7 L20.5088887,11.9274154 C20.5277817,11.9553879 20.5505589,11.9817437 20.5766914,12.0050272 C20.5864026,12.0144052 21.5651196,12.9418736 20.5129478,14.4266797 L20.5129711,14.4265066 Z" fill="white" fillRule="nonzero"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default YouIcon;
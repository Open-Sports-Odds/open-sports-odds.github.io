window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-14', y: 1544.844809928632}, {x: '2023-10-16', y: 1538.1584088570726}, {x: '2023-10-19', y: 1534.942313774949}, {x: '2023-10-21', y: 1537.8461586053331}, {x: '2023-10-24', y: 1542.7828774361135}, {x: '2023-10-26', y: 1547.8054562484342}, {x: '2023-10-28', y: 1545.4519108745872}, {x: '2023-10-31', y: 1539.4330545269397}, {x: '2023-11-02', y: 1537.5291969782488}, {x: '2023-11-04', y: 1532.2662223080713}, {x: '2023-11-06', y: 1534.377810210102}, {x: '2023-11-08', y: 1528.098213217827}, {x: '2023-11-10', y: 1529.9883093474805}, {x: '2023-11-11', y: 1534.0285298426627}, {x: '2023-11-17', y: 1535.9628986694438}, {x: '2023-11-19', y: 1538.1428355380438}, {x: '2023-11-24', y: 1535.421740657249}, {x: '2023-11-25', y: 1533.306057601718}, {x: '2023-11-28', y: 1535.4162282556256}, {x: '2023-11-30', y: 1536.8568744905888}, {x: '2023-12-02', y: 1534.154037899401}, {x: '2023-12-07', y: 1536.5863418022525}, {x: '2023-12-09', y: 1540.5390512798012}, {x: '2023-12-11', y: 1538.2001251741738}, {x: '2023-12-12', y: 1544.6311342467448}, {x: '2023-12-14', y: 1541.0523517399265}, {x: '2023-12-16', y: 1545.9411989567752}, {x: '2023-12-19', y: 1540.7002547870532}, {x: '2023-12-21', y: 1534.1985554788637}, {x: '2023-12-23', y: 1538.4172555972136}, {x: '2023-12-27', y: 1533.1311038481026}, {x: '2023-12-29', y: 1530.460516483921}, {x: '2023-12-30', y: 1527.7000398439527}, {x: '2024-01-02', y: 1533.265636625722}, {x: '2024-01-03', y: 1535.364267808015}, {x: '2024-01-06', y: 1538.8248932170372}, {x: '2024-01-09', y: 1541.6459819324164}, {x: '2024-01-11', y: 1539.2433368673835}, {x: '2024-01-13', y: 1535.2045926442715}, {x: '2024-01-14', y: 1530.053035899248}, {x: '2024-01-16', y: 1527.0972188617916}, {x: '2024-01-18', y: 1529.9207299797229}, {x: '2024-01-20', y: 1527.1039441447244}, {x: '2024-01-21', y: 1530.856056429255}, {x: '2024-01-24', y: 1533.0643259122296}, {x: '2024-01-27', y: 1537.7848022821167}, {x: '2024-02-05', y: 1534.45536091886}, {x: '2024-02-07', y: 1536.5251239282647}, {x: '2024-02-10', y: 1532.5202616250808}, {x: '2024-02-13', y: 1536.2999297917056}, {x: '2024-02-15', y: 1537.9853200579469}, {x: '2024-02-17', y: 1541.459611271803}, {x: '2024-02-19', y: 1545.6525076038656}, {x: '2024-02-21', y: 1549.5812514606853}, {x: '2024-02-22', y: 1555.3056189675858}, {x: '2024-02-24', y: 1558.2440987425532}, {x: '2024-02-27', y: 1551.4902672522487}, {x: '2024-02-29', y: 1553.500024062898}, {x: '2024-03-02', y: 1555.616687121441}, {x: '2024-03-04', y: 1549.990232965485}, {x: '2024-03-06', y: 1551.5533699332882}, {x: '2024-03-07', y: 1547.594830976257}, {x: '2024-03-09', y: 1549.4936983101202}, {x: '2024-03-14', y: 1554.4636458278037}, {x: '2024-03-16', y: 1551.7750805523604}, {x: '2024-03-19', y: 1549.1821582992352}, {x: '2024-03-20', y: 1554.4303008462034}, {x: '2024-03-23', y: 1558.4966698471364}, {x: '2024-03-24', y: 1556.6449718604028}, {x: '2024-03-26', y: 1549.9749380850476}, {x: '2024-03-28', y: 1553.6340218529024}, {x: '2024-03-30', y: 1558.0855802803692}, {x: '2024-04-01', y: 1561.5401346391898}, {x: '2024-04-03', y: 1555.958573727861}, {x: '2024-04-06', y: 1558.941120781329}, {x: '2024-04-08', y: 1560.6296348963203}, {x: '2024-04-09', y: 1564.7050631768718}, {x: '2024-04-11', y: 1561.0915415149095}, {x: '2024-04-13', y: 1557.5984533849803}, {x: '2024-04-16', y: 1554.06347852815}, {x: '2024-04-17', y: 1550.7960605569272}, {x: '2024-04-20', y: 1546.6287263653346}, {x: '2024-04-22', y: 1549.6378000195837}, {x: '2024-04-24', y: 1545.0341952085964}, {x: '2024-04-27', y: 1540.5830026699757}, {x: '2024-04-30', y: 1543.719406705588}, {x: '2024-05-02', y: 1545.768016755122}, {x: '2024-05-04', y: 1543.9239304831556}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-14', y: 1458.7816769817323}, {x: '2023-10-16', y: 1458.7816769817323}, {x: '2023-10-19', y: 1452.659948939231}, {x: '2023-10-21', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-26', y: 1443.5182136519763}, {x: '2023-10-28', y: 1440.850702784126}, {x: '2023-10-31', y: 1438.4355316085198}, {x: '2023-11-02', y: 1432.4227289413968}, {x: '2023-11-04', y: 1426.5125570078048}, {x: '2023-11-06', y: 1426.5125570078048}, {x: '2023-11-08', y: 1428.7776569170198}, {x: '2023-11-10', y: 1428.4253399295633}, {x: '2023-11-11', y: 1428.4253399295633}, {x: '2023-11-17', y: 1428.6068214051284}, {x: '2023-11-19', y: 1428.6068214051284}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-25', y: 1422.465215802711}, {x: '2023-11-28', y: 1425.2335956694112}, {x: '2023-11-30', y: 1422.9504781688645}, {x: '2023-12-02', y: 1429.1388851146744}, {x: '2023-12-07', y: 1434.7726345461049}, {x: '2023-12-09', y: 1434.7726345461049}, {x: '2023-12-11', y: 1433.5130035561965}, {x: '2023-12-12', y: 1436.2982159694657}, {x: '2023-12-14', y: 1435.5593150652985}, {x: '2023-12-16', y: 1434.5190976337649}, {x: '2023-12-19', y: 1428.1976560163328}, {x: '2023-12-21', y: 1423.5455548191892}, {x: '2023-12-23', y: 1421.262961340892}, {x: '2023-12-27', y: 1418.6237538293117}, {x: '2023-12-29', y: 1414.0166668147829}, {x: '2023-12-30', y: 1414.0166668147829}, {x: '2024-01-02', y: 1408.6886265533803}, {x: '2024-01-03', y: 1408.6886265533803}, {x: '2024-01-06', y: 1403.4833193418085}, {x: '2024-01-09', y: 1400.6622306264292}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-14', y: 1402.2889877584314}, {x: '2024-01-16', y: 1397.480932804766}, {x: '2024-01-18', y: 1397.480932804766}, {x: '2024-01-20', y: 1401.1542151272208}, {x: '2024-01-21', y: 1401.1542151272208}, {x: '2024-01-24', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-02-05', y: 1406.05279339158}, {x: '2024-02-07', y: 1406.05279339158}, {x: '2024-02-10', y: 1405.5502382583818}, {x: '2024-02-13', y: 1403.0063000065948}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-19', y: 1399.994891071644}, {x: '2024-02-21', y: 1396.626009644974}, {x: '2024-02-22', y: 1396.626009644974}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-27', y: 1393.0413840983194}, {x: '2024-02-29', y: 1389.5777775098718}, {x: '2024-03-02', y: 1384.9494483821034}, {x: '2024-03-04', y: 1382.845022689217}, {x: '2024-03-06', y: 1389.1008403173776}, {x: '2024-03-07', y: 1384.403919832391}, {x: '2024-03-09', y: 1386.8499882286212}, {x: '2024-03-14', y: 1383.2593573354457}, {x: '2024-03-16', y: 1380.739220534351}, {x: '2024-03-19', y: 1374.5141585474014}, {x: '2024-03-20', y: 1374.5141585474014}, {x: '2024-03-23', y: 1368.9639189013462}, {x: '2024-03-24', y: 1368.9639189013462}, {x: '2024-03-26', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-04-01', y: 1370.0795316912158}, {x: '2024-04-03', y: 1370.0795316912158}, {x: '2024-04-06', y: 1371.6671466928703}, {x: '2024-04-08', y: 1367.546665772972}, {x: '2024-04-09', y: 1365.6988139723182}, {x: '2024-04-11', y: 1371.457717342057}, {x: '2024-04-13', y: 1367.6720280060074}, {x: '2024-04-16', y: 1365.4750193490097}, {x: '2024-04-17', y: 1365.4750193490097}, {x: '2024-04-20', y: 1362.930360325431}, {x: '2024-04-22', y: 1362.930360325431}, {x: '2024-04-24', y: 1362.930360325431}, {x: '2024-04-27', y: 1362.930360325431}, {x: '2024-04-30', y: 1362.930360325431}, {x: '2024-05-02', y: 1362.930360325431}, {x: '2024-05-04', y: 1362.930360325431}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-14', y: 1573.1145356765671}, {x: '2023-10-16', y: 1573.1145356765671}, {x: '2023-10-19', y: 1579.6078435330344}, {x: '2023-10-21', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-26', y: 1580.9822141439151}, {x: '2023-10-28', y: 1580.9822141439151}, {x: '2023-10-31', y: 1574.7318443578088}, {x: '2023-11-02', y: 1577.9400838009683}, {x: '2023-11-04', y: 1572.0190026519558}, {x: '2023-11-06', y: 1572.0190026519558}, {x: '2023-11-08', y: 1574.608225035515}, {x: '2023-11-10', y: 1570.8114184636552}, {x: '2023-11-11', y: 1562.8394521334708}, {x: '2023-11-17', y: 1570.5998045195497}, {x: '2023-11-19', y: 1575.390408374609}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-25', y: 1580.779656627037}, {x: '2023-11-28', y: 1584.098874432398}, {x: '2023-11-30', y: 1581.15247912534}, {x: '2023-12-02', y: 1578.0894648310152}, {x: '2023-12-07', y: 1569.6267545513497}, {x: '2023-12-09', y: 1562.782671256339}, {x: '2023-12-11', y: 1564.3817270249915}, {x: '2023-12-12', y: 1564.3817270249915}, {x: '2023-12-14', y: 1567.367765859865}, {x: '2023-12-16', y: 1562.4131408659798}, {x: '2023-12-19', y: 1561.8471437101816}, {x: '2023-12-21', y: 1564.0843729432786}, {x: '2023-12-23', y: 1566.8323847480274}, {x: '2023-12-27', y: 1564.0966901102377}, {x: '2023-12-29', y: 1566.5536160892354}, {x: '2023-12-30', y: 1567.044690130504}, {x: '2024-01-02', y: 1569.7132271077653}, {x: '2024-01-03', y: 1569.7132271077653}, {x: '2024-01-06', y: 1565.8689661788476}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-14', y: 1575.155768260886}, {x: '2024-01-16', y: 1575.8077181915182}, {x: '2024-01-18', y: 1571.6343423560108}, {x: '2024-01-20', y: 1575.9105742257798}, {x: '2024-01-21', y: 1575.9105742257798}, {x: '2024-01-24', y: 1578.9961786362512}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-02-05', y: 1579.9847486633932}, {x: '2024-02-07', y: 1575.4701401621237}, {x: '2024-02-10', y: 1567.958326302683}, {x: '2024-02-13', y: 1570.8525347990835}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-19', y: 1583.9496307792117}, {x: '2024-02-21', y: 1585.2270793746688}, {x: '2024-02-22', y: 1583.0288510072005}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-27', y: 1585.7405503202606}, {x: '2024-02-29', y: 1586.780808646069}, {x: '2024-03-02', y: 1591.5013810958585}, {x: '2024-03-04', y: 1595.596500884628}, {x: '2024-03-06', y: 1598.4959195277142}, {x: '2024-03-07', y: 1594.7289907624272}, {x: '2024-03-09', y: 1598.0468452941464}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-16', y: 1590.3421021208007}, {x: '2024-03-19', y: 1590.3421021208007}, {x: '2024-03-20', y: 1590.3421021208007}, {x: '2024-03-23', y: 1590.1489757647437}, {x: '2024-03-24', y: 1591.4884892109249}, {x: '2024-03-26', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-04-01', y: 1583.8879590284926}, {x: '2024-04-03', y: 1583.8879590284926}, {x: '2024-04-06', y: 1581.006440830973}, {x: '2024-04-08', y: 1582.2852956901113}, {x: '2024-04-09', y: 1587.345940400775}, {x: '2024-04-11', y: 1587.345940400775}, {x: '2024-04-13', y: 1591.6357295419066}, {x: '2024-04-16', y: 1587.2988847176175}, {x: '2024-04-17', y: 1587.2988847176175}, {x: '2024-04-20', y: 1589.2233706487273}, {x: '2024-04-22', y: 1591.1053147189373}, {x: '2024-04-24', y: 1591.1053147189373}, {x: '2024-04-27', y: 1590.1918783638323}, {x: '2024-04-30', y: 1592.4504225358996}, {x: '2024-05-02', y: 1592.4504225358996}, {x: '2024-05-04', y: 1592.4504225358996}],
                borderColor: 'gray',
                fill: false,
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            }
        ]
        },
        options: {
            hover: {
                mode: null
            },
            animation: false,
            maintainAspectRatio: false, // Add this line
            scales: {
                y: {
                    min: 1300,
                    max: 1700,
                    ticks: {
                        color: 'black',
                        font: {
                            size: 20, // Adjust as needed
                            family:  "Kumbh Sans"
                        },
                        callback: function(value, index, values) {
                            // Display only every other tick
                            if (index % 2 === 0) return value;
                        }
                    }
                },
                x: {

                    type: 'time',
                        time: {
                            unit: 'month'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                const date = new Date(value);
                                const monthNames = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ];
                                return monthNames[date.getMonth()];
                            },
                            color: 'black',
                        font: {
                            size: 20, // Adjust as needed
                            family:  "Kumbh Sans" // Adjust to match your body font
                        },
                        padding: 20,
                        }
                }
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    display: false
                },
                annotation: {
                    annotations: {
                        line2: {
                            type: 'line',
                            yMin: 1504.7,
                            yMax: 1504.7,
                            borderColor: 'black',
                            borderWidth: 1,
                            label: {
                                content: 'NHL Avg',
                                enabled: true,
                                position: 'center',
                                xAdjust: 70,
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Add this line
                                color: 'black', // Add this line
                                font: {
                                    size: 13, // Adjust as needed
                                    family: "Kumbh Sans", // Adjust to match your body font
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}
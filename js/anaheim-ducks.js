window.onload = function() {
    var ctx = document.getElementById('myChart');
    ctx.height = 600; // Set the height as needed
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [{x: '2023-10-15', y: 1469.209712444784}, {x: '2023-10-19', y: 1466.7099454411548}, {x: '2023-10-21', y: 1464.6882347276548}, {x: '2023-10-22', y: 1461.279755265316}, {x: '2023-10-24', y: 1464.293494757838}, {x: '2023-10-26', y: 1467.870978493168}, {x: '2023-10-28', y: 1473.312294100488}, {x: '2023-10-30', y: 1476.505163866493}, {x: '2023-11-01', y: 1478.4610772004671}, {x: '2023-11-05', y: 1482.579368104232}, {x: '2023-11-07', y: 1478.603841154005}, {x: '2023-11-10', y: 1472.8252283174656}, {x: '2023-11-12', y: 1476.0691077780343}, {x: '2023-11-14', y: 1479.048575774594}, {x: '2023-11-15', y: 1475.545308133104}, {x: '2023-11-17', y: 1473.2840224969043}, {x: '2023-11-19', y: 1469.539906791588}, {x: '2023-11-22', y: 1466.5202669816988}, {x: '2023-11-24', y: 1462.1219718583257}, {x: '2023-11-26', y: 1457.930094284373}, {x: '2023-11-28', y: 1455.6147866731762}, {x: '2023-11-30', y: 1453.280902167156}, {x: '2023-12-02', y: 1456.3439164614808}, {x: '2023-12-05', y: 1455.110181962641}, {x: '2023-12-07', y: 1452.9787455515168}, {x: '2023-12-10', y: 1449.4505591180289}, {x: '2023-12-13', y: 1447.8122521914397}, {x: '2023-12-15', y: 1444.9794448749456}, {x: '2023-12-17', y: 1451.7136114034736}, {x: '2023-12-18', y: 1454.8017894142067}, {x: '2023-12-21', y: 1450.2082027808617}, {x: '2023-12-23', y: 1447.356781605484}, {x: '2023-12-27', y: 1452.6065121814693}, {x: '2023-12-29', y: 1448.5178278609749}, {x: '2023-12-31', y: 1443.5100489509364}, {x: '2024-01-03', y: 1441.411417768643}, {x: '2024-01-05', y: 1438.305457276399}, {x: '2024-01-07', y: 1435.8145695790677}, {x: '2024-01-09', y: 1441.260630952655}, {x: '2024-01-11', y: 1438.8129486117325}, {x: '2024-01-13', y: 1435.850606232185}, {x: '2024-01-15', y: 1439.7493795329974}, {x: '2024-01-16', y: 1437.1640023500104}, {x: '2024-01-20', y: 1433.4907200275557}, {x: '2024-01-21', y: 1429.780646245608}, {x: '2024-01-23', y: 1433.515781211681}, {x: '2024-01-25', y: 1432.1937368539611}, {x: '2024-01-27', y: 1435.646007969456}, {x: '2024-01-31', y: 1437.4599335821329}, {x: '2024-02-09', y: 1434.5713430627718}, {x: '2024-02-13', y: 1429.8798356373911}, {x: '2024-02-15', y: 1436.8442055572957}, {x: '2024-02-17', y: 1433.3699143434396}, {x: '2024-02-19', y: 1436.5788765032344}, {x: '2024-02-21', y: 1431.16724098576}, {x: '2024-02-24', y: 1429.7356363507863}, {x: '2024-02-25', y: 1426.3069995082778}, {x: '2024-02-29', y: 1430.380990618967}, {x: '2024-03-01', y: 1432.7717549117062}, {x: '2024-03-03', y: 1430.81999256324}, {x: '2024-03-06', y: 1433.1097954922177}, {x: '2024-03-08', y: 1428.884250506432}, {x: '2024-03-10', y: 1423.5480123063478}, {x: '2024-03-12', y: 1418.2449671430406}, {x: '2024-03-14', y: 1416.176736430709}, {x: '2024-03-15', y: 1413.349246425296}, {x: '2024-03-17', y: 1411.288700642251}, {x: '2024-03-19', y: 1407.114954889916}, {x: '2024-03-21', y: 1411.242615960506}, {x: '2024-03-24', y: 1409.4968422136187}, {x: '2024-03-26', y: 1405.8369711199489}, {x: '2024-03-28', y: 1403.2363848936698}, {x: '2024-03-30', y: 1400.9118473835483}, {x: '2024-03-31', y: 1399.8426341674}, {x: '2024-04-02', y: 1405.662082597939}, {x: '2024-04-05', y: 1401.8611941872307}, {x: '2024-04-07', y: 1399.9149615667932}, {x: '2024-04-09', y: 1404.7665558184126}, {x: '2024-04-12', y: 1400.6718828313983}, {x: '2024-04-13', y: 1398.818603945801}, {x: '2024-04-18', y: 1406.2926227143837}],
                borderColor: '#3935DA',
                fill: false,
                pointRadius: 0,
                borderWidth: 2 // Adjust as needed
            },
            {
                label: 'Min',
                data: [{x: '2023-10-15', y: 1458.7816769817323}, {x: '2023-10-15', y: 1458.7816769817323}, {x: '2023-10-19', y: 1452.659948939231}, {x: '2023-10-21', y: 1449.1220419021545}, {x: '2023-10-22', y: 1449.1220419021545}, {x: '2023-10-24', y: 1446.87056852046}, {x: '2023-10-26', y: 1443.5182136519763}, {x: '2023-10-28', y: 1440.850702784126}, {x: '2023-10-30', y: 1438.4355316085198}, {x: '2023-11-01', y: 1438.4355316085198}, {x: '2023-11-05', y: 1426.5125570078048}, {x: '2023-11-07', y: 1428.7776569170198}, {x: '2023-11-10', y: 1428.4253399295633}, {x: '2023-11-12', y: 1425.1814604689946}, {x: '2023-11-14', y: 1422.2182884018691}, {x: '2023-11-15', y: 1422.2182884018691}, {x: '2023-11-17', y: 1428.6068214051284}, {x: '2023-11-19', y: 1428.6068214051284}, {x: '2023-11-22', y: 1422.0673791819768}, {x: '2023-11-24', y: 1419.470536406789}, {x: '2023-11-26', y: 1422.465215802711}, {x: '2023-11-28', y: 1425.2335956694112}, {x: '2023-11-30', y: 1422.9504781688645}, {x: '2023-12-02', y: 1429.1388851146744}, {x: '2023-12-05', y: 1431.4087832541493}, {x: '2023-12-07', y: 1434.7726345461049}, {x: '2023-12-10', y: 1433.5130035561965}, {x: '2023-12-13', y: 1436.2982159694657}, {x: '2023-12-15', y: 1434.5190976337649}, {x: '2023-12-17', y: 1431.992839508311}, {x: '2023-12-18', y: 1431.992839508311}, {x: '2023-12-21', y: 1423.5455548191892}, {x: '2023-12-23', y: 1421.262961340892}, {x: '2023-12-27', y: 1418.6237538293117}, {x: '2023-12-29', y: 1414.0166668147829}, {x: '2023-12-31', y: 1412.371249961787}, {x: '2024-01-03', y: 1408.6886265533803}, {x: '2024-01-05', y: 1406.9439447508305}, {x: '2024-01-07', y: 1403.4833193418085}, {x: '2024-01-09', y: 1400.6622306264292}, {x: '2024-01-11', y: 1403.882547438634}, {x: '2024-01-13', y: 1402.2889877584314}, {x: '2024-01-15', y: 1399.3723635903991}, {x: '2024-01-16', y: 1397.480932804766}, {x: '2024-01-20', y: 1401.1542151272208}, {x: '2024-01-21', y: 1401.1542151272208}, {x: '2024-01-23', y: 1408.1606102998394}, {x: '2024-01-25', y: 1408.1606102998394}, {x: '2024-01-27', y: 1403.8121044860495}, {x: '2024-01-31', y: 1406.05279339158}, {x: '2024-02-09', y: 1405.5502382583818}, {x: '2024-02-13', y: 1403.0063000065948}, {x: '2024-02-15', y: 1399.3409606049936}, {x: '2024-02-17', y: 1401.9365619773191}, {x: '2024-02-19', y: 1399.994891071644}, {x: '2024-02-21', y: 1396.626009644974}, {x: '2024-02-24', y: 1394.964647753132}, {x: '2024-02-25', y: 1393.0413840983194}, {x: '2024-02-29', y: 1389.5777775098718}, {x: '2024-03-01', y: 1389.5777775098718}, {x: '2024-03-03', y: 1384.9494483821034}, {x: '2024-03-06', y: 1389.1008403173776}, {x: '2024-03-08', y: 1384.403919832391}, {x: '2024-03-10', y: 1387.040728952505}, {x: '2024-03-12', y: 1385.6949345470537}, {x: '2024-03-14', y: 1383.2593573354457}, {x: '2024-03-15', y: 1383.2593573354457}, {x: '2024-03-17', y: 1377.04502132716}, {x: '2024-03-19', y: 1374.5141585474014}, {x: '2024-03-21', y: 1371.6434015898162}, {x: '2024-03-24', y: 1368.9639189013462}, {x: '2024-03-26', y: 1366.208590382665}, {x: '2024-03-28', y: 1364.558329245743}, {x: '2024-03-30', y: 1373.4805212134331}, {x: '2024-03-31', y: 1373.4805212134331}, {x: '2024-04-02', y: 1370.0795316912158}, {x: '2024-04-05', y: 1368.4480005323287}, {x: '2024-04-07', y: 1367.546665772972}, {x: '2024-04-09', y: 1365.6988139723182}, {x: '2024-04-12', y: 1371.457717342057}, {x: '2024-04-13', y: 1367.6720280060074}, {x: '2024-04-18', y: 1362.930360325431}],
                borderColor: 'gray',
                fill: '+1',
                pointRadius: 0,
                borderWidth: 1 // Adjust as needed
            },
            {
                label: 'Max',
                data: [{x: '2023-10-15', y: 1573.1145356765671}, {x: '2023-10-15', y: 1573.1145356765671}, {x: '2023-10-19', y: 1579.6078435330344}, {x: '2023-10-21', y: 1582.3185724194468}, {x: '2023-10-22', y: 1582.3185724194468}, {x: '2023-10-24', y: 1586.5187478873129}, {x: '2023-10-26', y: 1580.9822141439151}, {x: '2023-10-28', y: 1580.9822141439151}, {x: '2023-10-30', y: 1574.7318443578088}, {x: '2023-11-01', y: 1577.9400838009683}, {x: '2023-11-05', y: 1572.0190026519558}, {x: '2023-11-07', y: 1574.608225035515}, {x: '2023-11-10', y: 1570.8114184636552}, {x: '2023-11-12', y: 1562.8394521334708}, {x: '2023-11-14', y: 1567.0965368780596}, {x: '2023-11-15', y: 1570.5998045195497}, {x: '2023-11-17', y: 1570.5998045195497}, {x: '2023-11-19', y: 1575.390408374609}, {x: '2023-11-22', y: 1576.0886593624937}, {x: '2023-11-24', y: 1578.329318289248}, {x: '2023-11-26', y: 1580.779656627037}, {x: '2023-11-28', y: 1584.098874432398}, {x: '2023-11-30', y: 1581.15247912534}, {x: '2023-12-02', y: 1578.0894648310152}, {x: '2023-12-05', y: 1574.815541945317}, {x: '2023-12-07', y: 1569.6267545513497}, {x: '2023-12-10', y: 1562.782671256339}, {x: '2023-12-13', y: 1567.367765859865}, {x: '2023-12-15', y: 1567.367765859865}, {x: '2023-12-17', y: 1564.939398991434}, {x: '2023-12-18', y: 1564.939398991434}, {x: '2023-12-21', y: 1564.0843729432786}, {x: '2023-12-23', y: 1566.8323847480274}, {x: '2023-12-27', y: 1564.0966901102377}, {x: '2023-12-29', y: 1566.5536160892354}, {x: '2023-12-31', y: 1568.1990329422313}, {x: '2024-01-03', y: 1569.7132271077653}, {x: '2024-01-05', y: 1572.2043254871442}, {x: '2024-01-07', y: 1565.8689661788476}, {x: '2024-01-09', y: 1570.0255069047062}, {x: '2024-01-11', y: 1571.711765873138}, {x: '2024-01-13', y: 1575.155768260886}, {x: '2024-01-15', y: 1572.0482725436}, {x: '2024-01-16', y: 1575.8077181915182}, {x: '2024-01-20', y: 1575.9105742257798}, {x: '2024-01-21', y: 1575.9105742257798}, {x: '2024-01-23', y: 1575.9105742257798}, {x: '2024-01-25', y: 1578.9961786362512}, {x: '2024-01-27', y: 1582.3017162814915}, {x: '2024-01-31', y: 1582.3017162814915}, {x: '2024-02-09', y: 1571.217125580815}, {x: '2024-02-13', y: 1570.8525347990835}, {x: '2024-02-15', y: 1577.096861305026}, {x: '2024-02-17', y: 1583.9496307792117}, {x: '2024-02-19', y: 1583.9496307792117}, {x: '2024-02-21', y: 1585.2270793746688}, {x: '2024-02-24', y: 1584.4139901831666}, {x: '2024-02-25', y: 1584.4139901831666}, {x: '2024-02-29', y: 1586.780808646069}, {x: '2024-03-01', y: 1586.780808646069}, {x: '2024-03-03', y: 1591.5013810958585}, {x: '2024-03-06', y: 1598.4959195277142}, {x: '2024-03-08', y: 1594.7289907624272}, {x: '2024-03-10', y: 1598.0468452941464}, {x: '2024-03-12', y: 1600.4754503268423}, {x: '2024-03-14', y: 1595.554309546796}, {x: '2024-03-15', y: 1595.554309546796}, {x: '2024-03-17', y: 1590.3421021208007}, {x: '2024-03-19', y: 1590.3421021208007}, {x: '2024-03-21', y: 1587.674376440522}, {x: '2024-03-24', y: 1591.4884892109249}, {x: '2024-03-26', y: 1587.3519217093096}, {x: '2024-03-28', y: 1584.4219884482818}, {x: '2024-03-30', y: 1587.6814346903532}, {x: '2024-03-31', y: 1587.6814346903532}, {x: '2024-04-02', y: 1583.8879590284926}, {x: '2024-04-05', y: 1581.006440830973}, {x: '2024-04-07', y: 1582.2852956901113}, {x: '2024-04-09', y: 1587.345940400775}, {x: '2024-04-12', y: 1591.6357295419066}, {x: '2024-04-13', y: 1591.6357295419066}, {x: '2024-04-18', y: 1587.2988847176175}],
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
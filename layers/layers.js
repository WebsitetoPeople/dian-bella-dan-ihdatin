var wms_layers = [];

var format_bangunan_0 = new ol.format.GeoJSON();
var features_bangunan_0 = format_bangunan_0.readFeatures(json_bangunan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_0.addFeatures(features_bangunan_0);
var lyr_bangunan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunan_0, 
                style: style_bangunan_0,
                interactive: true,
                title: '<img src="styles/legend/bangunan_0.png" /> bangunan'
            });
var format_industri_1 = new ol.format.GeoJSON();
var features_industri_1 = format_industri_1.readFeatures(json_industri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industri_1.addFeatures(features_industri_1);
var lyr_industri_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industri_1, 
                style: style_industri_1,
                interactive: true,
                title: '<img src="styles/legend/industri_1.png" /> industri'
            });
var format_lahankosong_2 = new ol.format.GeoJSON();
var features_lahankosong_2 = format_lahankosong_2.readFeatures(json_lahankosong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahankosong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahankosong_2.addFeatures(features_lahankosong_2);
var lyr_lahankosong_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lahankosong_2, 
                style: style_lahankosong_2,
                interactive: true,
                title: '<img src="styles/legend/lahankosong_2.png" /> lahan kosong'
            });
var format_mangrove_3 = new ol.format.GeoJSON();
var features_mangrove_3 = format_mangrove_3.readFeatures(json_mangrove_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mangrove_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mangrove_3.addFeatures(features_mangrove_3);
var lyr_mangrove_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mangrove_3, 
                style: style_mangrove_3,
                interactive: true,
                title: '<img src="styles/legend/mangrove_3.png" /> mangrove'
            });
var format_pemukimanteartur_4 = new ol.format.GeoJSON();
var features_pemukimanteartur_4 = format_pemukimanteartur_4.readFeatures(json_pemukimanteartur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimanteartur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimanteartur_4.addFeatures(features_pemukimanteartur_4);
var lyr_pemukimanteartur_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimanteartur_4, 
                style: style_pemukimanteartur_4,
                interactive: true,
                title: '<img src="styles/legend/pemukimanteartur_4.png" /> pemukiman teartur'
            });
var format_pemukimantidakteratur_5 = new ol.format.GeoJSON();
var features_pemukimantidakteratur_5 = format_pemukimantidakteratur_5.readFeatures(json_pemukimantidakteratur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimantidakteratur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimantidakteratur_5.addFeatures(features_pemukimantidakteratur_5);
var lyr_pemukimantidakteratur_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimantidakteratur_5, 
                style: style_pemukimantidakteratur_5,
                interactive: true,
                title: '<img src="styles/legend/pemukimantidakteratur_5.png" /> pemukiman tidak teratur'
            });
var format_sawah_6 = new ol.format.GeoJSON();
var features_sawah_6 = format_sawah_6.readFeatures(json_sawah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_6.addFeatures(features_sawah_6);
var lyr_sawah_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sawah_6, 
                style: style_sawah_6,
                interactive: true,
                title: '<img src="styles/legend/sawah_6.png" /> sawah'
            });
var format_tambak_7 = new ol.format.GeoJSON();
var features_tambak_7 = format_tambak_7.readFeatures(json_tambak_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambak_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambak_7.addFeatures(features_tambak_7);
var lyr_tambak_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tambak_7, 
                style: style_tambak_7,
                interactive: true,
                title: '<img src="styles/legend/tambak_7.png" /> tambak'
            });
var format_waduk_8 = new ol.format.GeoJSON();
var features_waduk_8 = format_waduk_8.readFeatures(json_waduk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_8.addFeatures(features_waduk_8);
var lyr_waduk_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waduk_8, 
                style: style_waduk_8,
                interactive: true,
                title: '<img src="styles/legend/waduk_8.png" /> waduk'
            });

        var lyr_GoogleSatellite_9 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PenggunaanLahan_10 = new ol.format.GeoJSON();
var features_PenggunaanLahan_10 = format_PenggunaanLahan_10.readFeatures(json_PenggunaanLahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_10.addFeatures(features_PenggunaanLahan_10);
var lyr_PenggunaanLahan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenggunaanLahan_10, 
                style: style_PenggunaanLahan_10,
                interactive: true,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_10_0.png" /> BANGUNAN<br />\
    <img src="styles/legend/PenggunaanLahan_10_1.png" /> BANGUNAN IBADAH<br />\
    <img src="styles/legend/PenggunaanLahan_10_2.png" /> INDUSTRI<br />\
    <img src="styles/legend/PenggunaanLahan_10_3.png" /> LAHAN KOSONG<br />\
    <img src="styles/legend/PenggunaanLahan_10_4.png" /> MANGROVE<br />\
    <img src="styles/legend/PenggunaanLahan_10_5.png" /> PERMUKIMAN TERATUR<br />\
    <img src="styles/legend/PenggunaanLahan_10_6.png" /> PERMUKIMAN TIDAK TERATUR<br />\
    <img src="styles/legend/PenggunaanLahan_10_7.png" /> SAWAH<br />\
    <img src="styles/legend/PenggunaanLahan_10_8.png" /> TAMBAK<br />\
    <img src="styles/legend/PenggunaanLahan_10_9.png" /> WADUK<br />\
    <img src="styles/legend/PenggunaanLahan_10_10.png" /> <br />'
        });
var format_jalangeojson_11 = new ol.format.GeoJSON();
var features_jalangeojson_11 = format_jalangeojson_11.readFeatures(json_jalangeojson_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangeojson_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangeojson_11.addFeatures(features_jalangeojson_11);
var lyr_jalangeojson_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalangeojson_11, 
                style: style_jalangeojson_11,
                interactive: true,
                title: '<img src="styles/legend/jalangeojson_11.png" /> jalan geojson'
            });

lyr_bangunan_0.setVisible(true);lyr_industri_1.setVisible(true);lyr_lahankosong_2.setVisible(true);lyr_mangrove_3.setVisible(true);lyr_pemukimanteartur_4.setVisible(true);lyr_pemukimantidakteratur_5.setVisible(true);lyr_sawah_6.setVisible(true);lyr_tambak_7.setVisible(true);lyr_waduk_8.setVisible(true);lyr_GoogleSatellite_9.setVisible(true);lyr_PenggunaanLahan_10.setVisible(true);lyr_jalangeojson_11.setVisible(true);
var layersList = [lyr_bangunan_0,lyr_industri_1,lyr_lahankosong_2,lyr_mangrove_3,lyr_pemukimanteartur_4,lyr_pemukimantidakteratur_5,lyr_sawah_6,lyr_tambak_7,lyr_waduk_8,lyr_GoogleSatellite_9,lyr_PenggunaanLahan_10,lyr_jalangeojson_11];
lyr_bangunan_0.set('fieldAliases', {'id': 'id', 'bangunan 3': 'bangunan 3', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PERUBAHAN': 'PERUBAHAN', 'PL_2023': 'PL_2023', 'Luas': 'Luas', });
lyr_industri_1.set('fieldAliases', {'id': 'id', 'industri': 'industri', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_lahankosong_2.set('fieldAliases', {'id': 'id', 'lahan koso': 'lahan koso', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_mangrove_3.set('fieldAliases', {'id': 'id', 'mangrove 1': 'mangrove 1', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_pemukimanteartur_4.set('fieldAliases', {'id': 'id', 'teratur': 'teratur', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_pemukimantidakteratur_5.set('fieldAliases', {'id': 'id', 'tdkteratur': 'tdkteratur', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_sawah_6.set('fieldAliases', {'id': 'id', 'sawah': 'sawah', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_tambak_7.set('fieldAliases', {'id': 'id', 'tambak': 'tambak', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_waduk_8.set('fieldAliases', {'id': 'id', 'waduk': 'waduk', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PL_2023': 'PL_2023', 'PERUBAHAN': 'PERUBAHAN', 'Luas': 'Luas', });
lyr_PenggunaanLahan_10.set('fieldAliases', {'id': 'id', 'bangunan 3': 'bangunan 3', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'PL_2019': 'PL_2019', 'PERUBAHAN': 'PERUBAHAN', 'PL_2023': 'PL_2023', 'Luas': 'Luas', 'industri': 'industri', 'lahan koso': 'lahan koso', 'mangrove 1': 'mangrove 1', 'teratur': 'teratur', 'tdkteratur': 'tdkteratur', 'sawah': 'sawah', 'tambak': 'tambak', 'waduk': 'waduk', 'layer': 'layer', 'path': 'path', });
lyr_jalangeojson_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_bangunan_0.set('fieldImages', {'id': '', 'bangunan 3': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PERUBAHAN': '', 'PL_2023': '', 'Luas': '', });
lyr_industri_1.set('fieldImages', {'id': '', 'industri': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_lahankosong_2.set('fieldImages', {'id': '', 'lahan koso': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_mangrove_3.set('fieldImages', {'id': '', 'mangrove 1': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_pemukimanteartur_4.set('fieldImages', {'id': '', 'teratur': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_pemukimantidakteratur_5.set('fieldImages', {'id': '', 'tdkteratur': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', });
lyr_sawah_6.set('fieldImages', {'id': '', 'sawah': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_tambak_7.set('fieldImages', {'id': '', 'tambak': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_waduk_8.set('fieldImages', {'id': '', 'waduk': '', 'WADMPR': '', 'WADMKK': '', 'WADMKC': '', 'WADMKD': '', 'PL_2019': '', 'PL_2023': '', 'PERUBAHAN': '', 'Luas': '', });
lyr_PenggunaanLahan_10.set('fieldImages', {'id': 'Range', 'bangunan 3': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'PL_2019': 'TextEdit', 'PERUBAHAN': 'TextEdit', 'PL_2023': 'TextEdit', 'Luas': 'TextEdit', 'industri': 'TextEdit', 'lahan koso': 'TextEdit', 'mangrove 1': 'TextEdit', 'teratur': 'TextEdit', 'tdkteratur': 'TextEdit', 'sawah': 'TextEdit', 'tambak': 'TextEdit', 'waduk': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_jalangeojson_11.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_bangunan_0.set('fieldLabels', {'id': 'no label', 'bangunan 3': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PERUBAHAN': 'no label', 'PL_2023': 'no label', 'Luas': 'no label', });
lyr_industri_1.set('fieldLabels', {'id': 'no label', 'industri': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_lahankosong_2.set('fieldLabels', {'id': 'no label', 'lahan koso': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_mangrove_3.set('fieldLabels', {'id': 'no label', 'mangrove 1': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_pemukimanteartur_4.set('fieldLabels', {'id': 'no label', 'teratur': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_pemukimantidakteratur_5.set('fieldLabels', {'id': 'no label', 'tdkteratur': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_sawah_6.set('fieldLabels', {'id': 'no label', 'sawah': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_tambak_7.set('fieldLabels', {'id': 'no label', 'tambak': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_waduk_8.set('fieldLabels', {'id': 'no label', 'waduk': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'PL_2019': 'no label', 'PL_2023': 'no label', 'PERUBAHAN': 'no label', 'Luas': 'no label', });
lyr_PenggunaanLahan_10.set('fieldLabels', {'id': 'inline label', 'bangunan 3': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'PL_2019': 'inline label', 'PERUBAHAN': 'inline label', 'PL_2023': 'inline label', 'Luas': 'inline label', 'industri': 'inline label', 'lahan koso': 'inline label', 'mangrove 1': 'inline label', 'teratur': 'inline label', 'tdkteratur': 'inline label', 'sawah': 'inline label', 'tambak': 'inline label', 'waduk': 'inline label', 'layer': 'inline label', 'path': 'inline label', });
lyr_jalangeojson_11.set('fieldLabels', {'NAMRJL': 'inline label', 'KONRJL': 'inline label', 'MATRJL': 'inline label', 'FGSRJL': 'inline label', 'UTKRJL': 'inline label', 'TOLRJL': 'inline label', 'WLYRJL': 'inline label', 'AUTRJL': 'inline label', 'KLSRJL': 'inline label', 'SPCRJL': 'inline label', 'JPARJL': 'inline label', 'ARHRJL': 'inline label', 'STARJL': 'inline label', 'KLLRJL': 'inline label', 'MEDRJL': 'inline label', 'LOCRJL': 'inline label', 'JARRJL': 'inline label', 'FCODE': 'inline label', 'REMARK': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_jalangeojson_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
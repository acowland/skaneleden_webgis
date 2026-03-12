var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_stoppesteder_2 = new ol.format.GeoJSON();
var features_stoppesteder_2 = format_stoppesteder_2.readFeatures(json_stoppesteder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stoppesteder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stoppesteder_2.addFeatures(features_stoppesteder_2);
var lyr_stoppesteder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stoppesteder_2, 
                style: style_stoppesteder_2,
                popuplayertitle: 'Stoppested',
                interactive: true,
                title: '<img src="styles/legend/stoppesteder_2.png" /> Stoppested'
            });
var format_route_hiking_3 = new ol.format.GeoJSON();
var features_route_hiking_3 = format_route_hiking_3.readFeatures(json_route_hiking_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_hiking_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_hiking_3.addFeatures(features_route_hiking_3);
var lyr_route_hiking_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_hiking_3, 
                style: style_route_hiking_3,
                popuplayertitle: 'Skåneleden',
                interactive: true,
                title: '<img src="styles/legend/route_hiking_3.png" /> Skåneleden'
            });
var group_Skneleden = new ol.layer.Group({
                                layers: [lyr_route_hiking_3,],
                                fold: 'open',
                                title: 'Rute'});
var group_Stoppesteder = new ol.layer.Group({
                                layers: [lyr_stoppesteder_2,],
                                fold: 'open',
                                title: 'Stoppested'});

lyr_OSMStandard_0.setVisible(false);lyr_OpenTopoMap_1.setVisible(true);lyr_stoppesteder_2.setVisible(true);lyr_route_hiking_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OpenTopoMap_1,group_Stoppesteder,group_Skneleden];
lyr_stoppesteder_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_route_hiking_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'route': 'route', 'image': 'image', 'official_n': 'official_n', 'alt_name_1': 'alt_name_1', 'bicycle': 'bicycle', 'via': 'via', 'pilgrimage': 'pilgrimage', 'alt_name': 'alt_name', 'tourism': 'tourism', 'noref': 'noref', 'survey_dat': 'survey_dat', 'signed_dir': 'signed_dir', 'network_ty': 'network_ty', 'name_en': 'name_en', 'to_en': 'to_en', 'wiki_symbo': 'wiki_symbo', 'url': 'url', 'source_url': 'source_url', 'wheelchair': 'wheelchair', 'name_etymo': 'name_etymo', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'check_date': 'check_date', 'ascent': 'ascent', 'stage': 'stage', 'descriptio': 'descriptio', 'sac_scale': 'sac_scale', 'length_uni': 'length_uni', 'length': 'length', 'website': 'website', 'to': 'to', 'from': 'from', 'state': 'state', 'attributio': 'attributio', 'ref': 'ref', 'operator': 'operator', 'type': 'type', 'symbol': 'symbol', 'roundtrip': 'roundtrip', 'osmc_symbo': 'osmc_symbo', 'network': 'network', 'name': 'name', 'distance': 'distance', 'colour': 'colour', });
lyr_stoppesteder_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_route_hiking_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'route': '', 'image': '', 'official_n': '', 'alt_name_1': '', 'bicycle': '', 'via': '', 'pilgrimage': '', 'alt_name': '', 'tourism': '', 'noref': '', 'survey_dat': '', 'signed_dir': '', 'network_ty': '', 'name_en': '', 'to_en': '', 'wiki_symbo': '', 'url': '', 'source_url': '', 'wheelchair': '', 'name_etymo': '', 'wikipedia': '', 'wikidata': '', 'check_date': '', 'ascent': '', 'stage': '', 'descriptio': '', 'sac_scale': '', 'length_uni': '', 'length': '', 'website': '', 'to': '', 'from': '', 'state': '', 'attributio': '', 'ref': '', 'operator': '', 'type': '', 'symbol': '', 'roundtrip': '', 'osmc_symbo': '', 'network': '', 'name': '', 'distance': '', 'colour': '', });
lyr_stoppesteder_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - visible with data', });
lyr_route_hiking_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'route': 'no label', 'image': 'no label', 'official_n': 'no label', 'alt_name_1': 'no label', 'bicycle': 'no label', 'via': 'no label', 'pilgrimage': 'no label', 'alt_name': 'no label', 'tourism': 'no label', 'noref': 'no label', 'survey_dat': 'no label', 'signed_dir': 'no label', 'network_ty': 'no label', 'name_en': 'no label', 'to_en': 'no label', 'wiki_symbo': 'no label', 'url': 'no label', 'source_url': 'no label', 'wheelchair': 'no label', 'name_etymo': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'check_date': 'no label', 'ascent': 'no label', 'stage': 'no label', 'descriptio': 'no label', 'sac_scale': 'no label', 'length_uni': 'no label', 'length': 'no label', 'website': 'no label', 'to': 'no label', 'from': 'no label', 'state': 'no label', 'attributio': 'no label', 'ref': 'no label', 'operator': 'no label', 'type': 'no label', 'symbol': 'no label', 'roundtrip': 'no label', 'osmc_symbo': 'no label', 'network': 'no label', 'name': 'no label', 'distance': 'no label', 'colour': 'no label', });
lyr_route_hiking_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

const keystone = require('keystone');

const Types = keystone.Field.Types;

const Musteriler = new keystone.List('Musteriler', {
    nocreate: false,
    noedit: false,
});

const storage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/media'), // required; path where the files should be stored
        publicPath: '/media/', // path where files will be served
    },
    schema: {
        size: true,
        mimetype: true,
        url: true,
    },
});

Musteriler.add({
    musretiAdi: { type: String, required: true, initial: true },
    sigortaliAdi: { type: String, required: true, initial: true },
    plaka: { type: String, required: true, initial: true },
    tcNo: { type: Number },
    vergiNo: { type: Number },
    belgeSeriNo: { type: Number, required: true, initial: true },
    sigortaTuru: { type: Types.Select, options: 'trafik,true', default: 'trafik' },
    acente: { type: Types.Select, options: 'erka sigorta, abc sigorta', defautl: 'erka sigorta' },
    odemeTipi: { type: Types.Select, options: '0,1,2', default: '0' },
    primTutari: { type: Types.Money },
    komisyonTutari: { type: Types.Money },
    policeNo: { type: Number },
    telefonNo: { type: Number },
    ePosta: { type: Types.Email },
    tanzimTarihi: { type: Types.Datetime },
    baslangic: { type: Types.Datetime },
    islemTuru: { type: Types.Select, options: 'police, abc, cba', default: 'police' },
    description: { type: Types.Markdown, wysiwyg: false, height: 150 },
    police: { type: Types.File, storage }
});

Musteriler.defaultSort = '-musteriAdi';
Musteriler.defaultColumns = 'musteriAdi, sigortaliAdi, plaka,tcNo,vergiNo,belgeSeriNo,sigortaTuru,acente,odemeTipi';
Musteriler.register();

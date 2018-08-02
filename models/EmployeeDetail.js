const keystone = require('keystone');

const Types = keystone.Field.Types;

const MusteriDetay = new keystone.List('MusteriDetay', {
    nocreate: false,
    noedit: false,
});

MusteriDetay.add({
    musteriId: { type: Number },
    musteriAdi: { type: String },
    musteriTipi: { type: Types.Select, options: 'kurumsal, bireysel', default: 'kurumsal' },
    telefon: { type: Number },
    adres: { type: Types.Markdown, wysiwyg: false, height: 100 },
    tcNo: { type: Number },
    vergiNo: { type: Number },
    aciklama: { type: Types.Markdown, wysiwyg: false, height: 150 }
});

MusteriDetay.defaultSort = 'musteriId';
MusteriDetay.defaultColumns = 'musteriId, musteriAdi, musteriTipi, telefon, adres, tcNo, vergiNo, aciklama';
MusteriDetay.register();
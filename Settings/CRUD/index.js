import { createStackNavigator } from 'react-navigation'
import Home from './home';

import Tambah from './tambah';
import TambahKategori from './tambahKat';

import Update from './update';
import UpdateKategori from './updateKat';

import detailUpdateKat from './detailUpdateKat';
import detailUpdate from './detailUpdate';


import pilihTambah from './pilihTambah';
import pilihUpdate from './pilihUpdate';

import findQr from './QRCode';

import detailBuku from './detailBuku.js';

import hapusBuku from './hapusBuku.js';

export default createStackNavigator({
    Home,
    Tambah,
    TambahKategori,
    UpdateKategori,
    Update,
    detailUpdateKat,
    detailUpdate,
    pilihTambah,
    pilihUpdate,
    findQr,
    detailBuku,
    hapusBuku
});

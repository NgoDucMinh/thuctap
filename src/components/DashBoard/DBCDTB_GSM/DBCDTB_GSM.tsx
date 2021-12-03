import React from 'react'
import './DBCDTB_GSM.css';
import QTC_Add_table from '../../QTC_Add_table/QTC_Add_table';
import QLTB_CDTB from '../../QLTB_GSM/QLTB_CDTB/QLTB_CDTB';
import QLTB_CDTB_table from '../../QLTB_GSM/QLTB_CDTB/QLTB_CDTB_table/QLTB_CDTB_table';


export default function DBCDTB_GSM() {
    return (
        <div className="DBCDTB">
            <QLTB_CDTB />
            <QLTB_CDTB_table />

        </div>
    )
}

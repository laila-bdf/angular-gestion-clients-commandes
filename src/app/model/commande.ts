import { Client } from "./client";

export class Commande {
    id!: number;
    date_commande!: Date;
    prix_total!:Float32Array;
    mode_payement!: string;
    status!: string;
    client!:Client;
}

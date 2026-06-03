import { CardDetails } from "./CardDetails";
import { FilialeDetails } from "./FilialeDetails";


export class Filiale{
    constructor(
        public idName = "",
        public name = "",
        public details = "",
        public description = "",
        public cover: string[] = [],
        public logo = "",
        public logoWhite = "",
        public icon = "",
        public cardDetails = new CardDetails(),
        public filialeDetails: FilialeDetails[] = []
    ){}
}
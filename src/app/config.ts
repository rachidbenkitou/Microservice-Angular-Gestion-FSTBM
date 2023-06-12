import { HttpHeaders } from "@angular/common/http";

export const GET_BASE_URL = (nomService: string) => `http://localhost:8222/${nomService}/api/v1/`;
export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
export const STUDENT_BE_SERVICE = 'etudiant-service';
export const STUDENT_BE_APIS = {
    FILIERES: 'filiers',
    ETUDIANTS: 'etudiants',
    INSCRIPTIONS: 'inscriptions',
}

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://bo.ecos.externis.net/Account/Login?token=fovoDKEABT4FeFmW2w8Fe7fjLVTGtiF4KDBOVojCWZP%2Bbtp%2BjQH8ZU5TbsnewWU%2B3T6VFrxlIri%2Bq0LvvxLVZkfEUEq58%2FYLTMQMkka0YfkV6gdcOPt0zRFrrqSOn4BHYepy8K6OjEAF1kD8t3ma1YkKdotxNv3oDiSFO%2B9oYC4%3D');
    sleep(1);
}

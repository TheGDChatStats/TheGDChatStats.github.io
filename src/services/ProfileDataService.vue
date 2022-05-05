<script>
import http from "@/http-common.js";
class ProfileDataService {
    getProfile(id){
        return http.get(`/${id}`)
    }
}
export default new ProfileDataService();
</script>
<template>
    <footer class="footer-container">
        <div class="footer">
            <div>
                <AppLogo :type="'footer'" />
                <p class="footer-text">{{ footerText }}</p>
            </div>
            <div>
                <p class="footer-contact">Contact Us</p>
                <div>
                    <address 
                        v-for="contact in footerContact" 
                        :key="contact.msg">
                        <a 
                            class="footer-contact-item" 
                            :href="contact.href">
                            {{ contact.msg }}
                        </a>
                    </address>
                </div>

           </div>
        </div>
    </footer>

</template>

<script>
import {textData, contactData} from '../consts/footerData'
export default {
    data(){
        return {
            footerText: '',
            footerContact: '',
        }
    },
    created(){
        this.footerText = textData
        this.footerContact = contactData
    }
}

</script>

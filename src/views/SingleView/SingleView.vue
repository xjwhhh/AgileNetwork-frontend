<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>Single View
                <small>{{$t("dashboard.WELCOME")}}</small>
            </div>
            <!-- START Language list-->
            <div class="ml-auto">
                <b-dropdown id="ddown1" :text="selectedLanguage()" no-caret right>
                    <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
                    <b-dropdown-item @click="changeLanguage('es')">Spanish</b-dropdown-item>
                </b-dropdown>
            </div>
            <!-- END Language list-->
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-thin">Single view content</h2>
                <p>This project is an application skeleton. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.
                    <br>The seed app doesn't do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.</p>
            </div>
        </div>
    </ContentWrapper>
</template>

<script>
    export default {
        data() {
            return {
                selectedLanguage() {
                    switch(this.$i18n.i18next.language) {
                        case 'es': return 'Spanish'; break;
                        case 'en': default: return 'English';
                    }
                }
            }
        },
        methods: {
            changeLanguage (lang) {
                this.$i18n.i18next.changeLanguage(lang);
            }
        }
    }
</script>
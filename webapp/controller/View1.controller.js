sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project8.controller.View1", {

        // ✅ IMAGE PATH FIX FOR FLP
        onInit: function () {
            var sImagePath = sap.ui.require.toUrl("project8/images/Student.jpg");
            this.getView().byId("myImage").setSrc(sImagePath);
        },

        // ================= IMAGE =================
        onShowImage: function () {
            this.getView().byId("imageContainer").setVisible(true);
        },

        onCloseImage: function () {
            this.getView().byId("imageContainer").setVisible(false);
        },

        onNavBack: function () {
            this.getView().byId("imageContainer").setVisible(false);
        },

        // ================= FORM =================
        onShowForm: function () {
            this.getView().byId("formContainer").setVisible(true);
        },

        onCloseForm: function () {
            var oView = this.getView();

            oView.byId("formContainer").setVisible(false);

            oView.byId("name").setValue("");
            oView.byId("roll").setValue("");
            oView.byId("college").setValue("");
            oView.byId("course").setValue("");
            oView.byId("mobile").setValue("");
        },

        // ================= SUBMIT =================
        onSubmitForm: function () {
            var oView = this.getView();

            var name = oView.byId("name").getValue();
            var roll = oView.byId("roll").getValue();
            var college = oView.byId("college").getValue();
            var course = oView.byId("course").getValue();
            var mobile = oView.byId("mobile").getValue();

            if (!name || !roll || !college || !course || !mobile) {
                MessageToast.show("Please fill all fields");
                return;
            }

            oView.byId("mainContent").setVisible(false);
            oView.byId("successPage").setVisible(true);
            oView.byId("footerBar").setVisible(false);

            oView.byId("name").setValue("");
            oView.byId("roll").setValue("");
            oView.byId("college").setValue("");
            oView.byId("course").setValue("");
            oView.byId("mobile").setValue("");
        },

        // ================= RESUBMIT =================
        onResubmit: function () {
            var oView = this.getView();

            oView.byId("successPage").setVisible(false);
            oView.byId("mainContent").setVisible(true);
            oView.byId("formContainer").setVisible(true);
            oView.byId("footerBar").setVisible(true);
        },

        // ================= CANCEL =================
        onCancel: function () {
            var oView = this.getView();

            var name = oView.byId("name").getValue();
            var roll = oView.byId("roll").getValue();
            var college = oView.byId("college").getValue();
            var course = oView.byId("course").getValue();
            var mobile = oView.byId("mobile").getValue();

            if (name || roll || college || course || mobile) {

                oView.byId("name").setValue("");
                oView.byId("roll").setValue("");
                oView.byId("college").setValue("");
                oView.byId("course").setValue("");
                oView.byId("mobile").setValue("");

                MessageToast.show("Changes are not saved ❌");
            } else {
                MessageToast.show("Nothing to clear");
            }
        }

    });
});
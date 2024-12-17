const groups = "समूहों";
const models = "संग्रह प्रकार";
const pageNotFound = "पृष्ठ नहीं मिला";
const hi = {
  "App.schemas.data-loaded": "स्कीमा सफलतापूर्वक लोड हो गए हैं",
  "ListViewTable.relation-loaded": "रिश्तों को लोड किया गया है",
  "ListViewTable.relation-loading": "संबंध लोड हो रहे हैं",
  "ListViewTable.relation-more": "इस संबंध में प्रदर्शित की तुलना में अधिक इकाइयां हैं",
  "EditRelations.title": "संबंधपरक डेटा",
  "HeaderLayout.button.label-add-entry": "नई प्रविष्टि बनाएं",
  "api.id": "एपीआई आईडी",
  "components.AddFilterCTA.add": "फिल्टर",
  "components.AddFilterCTA.hide": "फिल्टर",
  "components.DragHandle-label": "खींचें",
  "components.DraggableAttr.edit": "सम्पादन के लिए क्लिक करो",
  "components.DraggableCard.delete.field": "चीज़ें हटाएं}",
  "components.DraggableCard.edit.field": "संपादित {item}",
  "components.DraggableCard.move.field": "{आइटम} ले जाएँ",
  "components.ListViewTable.row-line": "आइटम लाइन {नंबर}",
  "components.DynamicZone.ComponentPicker-label": "एक घटक चुनें",
  "components.DynamicZone.add-component": "{घटक नाम} में एक घटक जोड़ें",
  "components.DynamicZone.delete-label": "{नाम} हटाएं",
  "components.DynamicZone.error-message": "घटक में त्रुटि है",
  "components.DynamicZone.missing-components": "वहाँ {संख्या, बहुवचन, =0 {हैं # अनुपलब्ध घटक} एक {is # अनुपलब्ध घटक} अन्य {हैं # अनुपलब्ध घटक}}",
  "components.DynamicZone.move-down-label": "घटक नीचे ले जाएँ",
  "components.DynamicZone.move-up-label": "घटक ऊपर ले जाएँ",
  "components.DynamicZone.pick-compo": "एक घटक चुनें",
  "components.DynamicZone.required": "घटक आवश्यक है",
  "components.EmptyAttributesBlock.button": "सेटिंग पेज पर जाएं",
  "components.EmptyAttributesBlock.description": "आप अपनी सेटिंग बदल सकते हैं",
  "components.FieldItem.linkToComponentLayout": "घटक का लेआउट सेट करें",
  "components.FieldSelect.label": "एक फ़ील्ड जोड़ें",
  "components.FilterOptions.button.apply": "आवेदन करना",
  "components.FiltersPickWrapper.PluginHeader.actions.apply": "आवेदन करना",
  "components.FiltersPickWrapper.PluginHeader.actions.clearAll": "सभी साफ करें",
  "components.FiltersPickWrapper.PluginHeader.description": "प्रविष्टियों को फ़िल्टर करने के लिए लागू करने के लिए शर्तें निर्धारित करें",
  "components.FiltersPickWrapper.PluginHeader.title.filter": "फिल्टर",
  "components.FiltersPickWrapper.hide": "छिपाना",
  "components.LeftMenu.Search.label": "सामग्री प्रकार खोजें",
  "components.LeftMenu.collection-types": "संग्रह प्रकार",
  "components.LeftMenu.single-types": "एकल प्रकार",
  "components.LimitSelect.itemsPerPage": "आइटम प्रति पेज",
  "components.NotAllowedInput.text": "इस फ़ील्ड को देखने की अनुमति नहीं है",
  "components.RepeatableComponent.error-message": "घटक (ओं) में त्रुटि है",
  "components.Search.placeholder": "एक प्रविष्टि खोजें ...",
  "components.Select.draft-info-title": "राज्य: मसौदा",
  "components.Select.publish-info-title": "राज्य: प्रकाशित",
  "components.SettingsViewWrapper.pluginHeader.description.edit-settings": "अनुकूलित करें कि संपादन दृश्य कैसा दिखेगा।",
  "components.SettingsViewWrapper.pluginHeader.description.list-settings": "सूची दृश्य की सेटिंग परिभाषित करें.",
  "components.SettingsViewWrapper.pluginHeader.title": "दृश्य कॉन्फ़िगर करें - {नाम}",
  "components.TableDelete.delete": "सभी हटा दो",
  "components.TableDelete.deleteSelected": "चयनित मिटाएं",
  "components.TableDelete.label": "{संख्या, बहुवचन, एक {# प्रविष्टि} अन्य {# प्रविष्टियां}} चयनित",
  "components.TableEmpty.withFilters": "लागू किए गए फ़िल्टर के साथ कोई {contentType} नहीं है...",
  "components.TableEmpty.withSearch": "खोज से संबंधित कोई {contentType} नहीं है ({search})...",
  "components.TableEmpty.withoutFilter": "कोई {contentType} नहीं है...",
  "components.empty-repeatable": "अभी तक कोई प्रविष्टि नहीं। एक जोड़ने के लिए नीचे दिए गए बटन पर क्लिक करें।",
  "components.notification.info.maximum-requirement": "आप पहले ही फ़ील्ड की अधिकतम संख्या तक पहुँच चुके हैं",
  "components.notification.info.minimum-requirement": "न्यूनतम आवश्यकता से मेल खाने के लिए एक फ़ील्ड जोड़ा गया है",
  "components.repeatable.reorder.error": "आपके घटक के क्षेत्र को पुन: व्यवस्थित करते समय एक त्रुटि हुई, कृपया पुन: प्रयास करें",
  "components.reset-entry": "प्रविष्टि रीसेट करें",
  "components.uid.apply": "लागू",
  "components.uid.available": "उपलब्ध",
  "components.uid.regenerate": "पुनः जेनरेट",
  "components.uid.suggested": "सुझाव दिया",
  "components.uid.unavailable": "अनुपलब्ध",
  "containers.Edit.Link.Layout": "लेआउट कॉन्फ़िगर करें",
  "containers.Edit.Link.Model": "संग्रह-प्रकार संपादित करें",
  "containers.Edit.addAnItem": "एक आइटम जोड़ें...",
  "containers.Edit.clickToJump": "प्रवेश पर जाने के लिए क्लिक करें",
  "containers.Edit.delete": "मिटाना",
  "containers.Edit.delete-entry": "मिटाना",
  "containers.Edit.editing": "संपादन...",
  "containers.Edit.information": "जानकारी",
  "containers.Edit.information.by": "द्वारा",
  "containers.Edit.information.created": "बनाया था",
  "containers.Edit.information.draftVersion": "मसौदा संस्करण",
  "containers.Edit.information.editing": "संपादन",
  "containers.Edit.information.lastUpdate": "आखिरी अपडेट",
  "containers.Edit.information.publishedVersion": "प्रकाशित संस्करण",
  "containers.Edit.pluginHeader.title.new": "एक प्रविष्टि बनाएँ",
  "containers.Edit.reset": "रीसेट",
  "containers.Edit.returnList": "सूची पर लौटें",
  "containers.Edit.seeDetails": "विवरण",
  "containers.Edit.submit": "बचाना",
  "containers.EditSettingsView.modal-form.edit-field": "फ़ील्ड संपादित करें",
  "containers.EditView.add.new-entry": "एक प्रविष्टि जोड़ें",
  "containers.EditView.notification.errors": "प्रपत्र में कुछ त्रुटियां हैं",
  "containers.Home.introduction": "अपनी प्रविष्टियों को संपादित करने के लिए बाएं मेनू में विशिष्ट लिंक पर जाएं। इस प्लगइन में सेटिंग्स को संपादित करने का उचित तरीका नहीं है और यह अभी भी सक्रिय विकास के अधीन है।",
  "containers.Home.pluginHeaderDescription": "एक शक्तिशाली और सुंदर इंटरफ़ेस के माध्यम से अपनी प्रविष्टियाँ प्रबंधित करें।",
  "containers.Home.pluginHeaderTitle": "सामग्री प्रबंधक",
  "containers.List.draft": "प्रारूप",
  "containers.List.errorFetchRecords": "गलती",
  "containers.List.published": "प्रकाशित",
  "containers.list.displayedFields": "प्रदर्शित फ़ील्ड",
  "containers.list.items": "{संख्या, बहुवचन, =0 {आइटम} एक {आइटम} अन्य {आइटम}}",
  "containers.list.table-headers.publishedAt": "राज्य",
  "containers.ListSettingsView.modal-form.edit-label": "संपादित करें {फ़ील्डनाम}",
  "containers.SettingPage.add.field": "एक और फ़ील्ड डालें",
  "containers.SettingPage.attributes": "गुण फ़ील्ड",
  "containers.SettingPage.attributes.description": "गुणों के क्रम को परिभाषित करें",
  "containers.SettingPage.editSettings.description": "लेआउट बनाने के लिए फ़ील्ड खींचें और छोड़ें",
  "containers.SettingPage.editSettings.entry.title": "प्रवेश शीर्षक",
  "containers.SettingPage.editSettings.entry.title.description": "अपनी प्रविष्टि का प्रदर्शित फ़ील्ड सेट करें",
  "containers.SettingPage.editSettings.relation-field.description": "प्रदर्शित फ़ील्ड को संपादन और सूची दृश्य दोनों में सेट करें",
  "containers.SettingPage.editSettings.title": "दृश्य संपादित करें (सेटिंग्स)",
  "containers.SettingPage.layout": "विन्यास",
  "containers.SettingPage.listSettings.description": "इस संग्रह प्रकार के लिए विकल्पों को कॉन्फ़िगर करें",
  "containers.SettingPage.listSettings.title": "सूची दृश्य (सेटिंग्स)",
  "containers.SettingPage.pluginHeaderDescription": "इस संग्रह प्रकार के लिए विशिष्ट सेटिंग्स कॉन्फ़िगर करें",
  "containers.SettingPage.settings": "समायोजन",
  "containers.SettingPage.view": "देखना",
  "containers.SettingViewModel.pluginHeader.title": "सामग्री प्रबंधक - {नाम}",
  "containers.SettingsPage.Block.contentType.description": "विशिष्ट सेटिंग्स कॉन्फ़िगर करें",
  "containers.SettingsPage.Block.contentType.title": "संग्रह प्रकार",
  "containers.SettingsPage.Block.generalSettings.description": "अपने संग्रह प्रकारों के लिए डिफ़ॉल्ट विकल्प कॉन्फ़िगर करें",
  "containers.SettingsPage.Block.generalSettings.title": "सामान्य",
  "containers.SettingsPage.pluginHeaderDescription": "अपने सभी संग्रह प्रकारों और समूहों के लिए सेटिंग कॉन्फ़िगर करें",
  "containers.SettingsView.list.subtitle": "अपने संग्रह प्रकारों और समूहों का लेआउट और प्रदर्शन कॉन्फ़िगर करें",
  "containers.SettingsView.list.title": "प्रदर्शन विन्यास",
  "edit-settings-view.link-to-ctb.components": "घटक संपादित करें",
  "edit-settings-view.link-to-ctb.content-types": "सामग्री प्रकार संपादित करें",
  "emptyAttributes.button": "कलेक्शन टाइप बिल्डर पर जाएं",
  "emptyAttributes.description": "अपने संग्रह प्रकार में अपना पहला फ़ील्ड जोड़ें",
  "emptyAttributes.title": "अभी तक कोई फ़ील्ड नहीं है",
  "error.attribute.key.taken": "यह मान पहले से मौजूद है",
  "error.attribute.sameKeyAndName": "बराबर नहीं हो सकता",
  "error.attribute.taken": "यह फ़ील्ड नाम पहले से मौजूद है",
  "error.contentTypeName.taken": "यह नाम पहले से मौजूद है",
  "error.model.fetch": "मॉडल कॉन्फिगर लाने के दौरान एक त्रुटि हुई।",
  "error.record.create": "रिकॉर्ड निर्माण के दौरान एक त्रुटि हुई।",
  "error.record.delete": "रिकॉर्ड हटाने के दौरान एक त्रुटि हुई।",
  "error.record.fetch": "रिकॉर्ड लाने के दौरान एक त्रुटि हुई।",
  "error.record.update": "रिकॉर्ड अद्यतन के दौरान एक त्रुटि हुई।",
  "error.records.count": "गणना रिकॉर्ड लाने के दौरान एक त्रुटि हुई।",
  "error.records.fetch": "रिकॉर्ड लाने के दौरान एक त्रुटि हुई।",
  "error.schema.generation": "स्कीमा जनरेशन के दौरान कोई त्रुटि उत्पन्न हुई।",
  "error.validation.json": "यह JSON नहीं है",
  "error.validation.max": "मान बहुत ज़्यादा है.",
  "error.validation.maxLength": "मान बहुत लंबा है",
  "error.validation.min": "मान बहुत कम है।",
  "error.validation.minLength": "मान बहुत छोटा है",
  "error.validation.minSupMax": "श्रेष्ठ नहीं हो सकता",
  "error.validation.regex": "मान रेगेक्स से मेल नहीं खाता।",
  "error.validation.required": "यह मान इनपुट आवश्यक है।",
  "form.Input.bulkActions": "बल्क कार्रवाइयां सक्षम करें",
  "form.Input.defaultSort": "डिफ़ॉल्ट सॉर्ट विशेषता",
  "form.Input.description": "विवरण",
  "form.Input.description.placeholder": "प्रोफ़ाइल में नाम प्रदर्शित करें",
  "form.Input.editable": "संपादन योग्य क्षेत्र",
  "form.Input.filters": "फ़िल्टर सक्षम करें",
  "form.Input.label": "लेबल",
  "form.Input.label.inputDescription": "यह मान तालिका के शीर्ष में प्रदर्शित लेबल को ओवरराइड करता है",
  "form.Input.pageEntries": "प्रति पृष्ठ प्रविष्टियाँ",
  "form.Input.pageEntries.inputDescription": "नोट: आप संग्रह प्रकार सेटिंग पृष्ठ में इस मान को ओवरराइड कर सकते हैं।",
  "form.Input.placeholder": "प्लेसहोल्डर",
  "form.Input.placeholder.placeholder": "मेरा अद्भुत मूल्य",
  "form.Input.search": "खोज सक्षम करें",
  "form.Input.search.field": "इस क्षेत्र में खोज सक्षम करें",
  "form.Input.sort.field": "इस फ़ील्ड पर क्रमित करना सक्षम करें",
  "form.Input.sort.order": "डिफ़ॉल्ट सॉर्ट क्रम",
  "form.Input.wysiwyg": "WYSIWYG के रूप में प्रदर्शित करें",
  "global.displayedFields": "प्रदर्शित फ़ील्ड",
  groups,
  "groups.numbered": "समूहों ({number})",
  "header.name": "विषय",
  "link-to-ctb": "मॉडल संपादित करें",
  models,
  "models.numbered": "संग्रह प्रकार ({number})",
  "notification.error.displayedFields": "आपको कम से कम एक प्रदर्शित फ़ील्ड चाहिए",
  "notification.error.relationship.fetch": "संबंध लाने के दौरान एक त्रुटि हुई।",
  "notification.info.SettingPage.disableSort": "छँटाई की अनुमति के साथ आपके पास एक विशेषता होनी चाहिए",
  "notification.info.minimumFields": "आपको कम से कम एक फ़ील्ड प्रदर्शित करने की आवश्यकता है",
  "notification.upload.error": "आपकी फ़ाइलें अपलोड करते समय एक त्रुटि हुई है",
  pageNotFound,
  "pages.ListView.header-subtitle": "{संख्या, बहुवचन, =0 {# प्रविष्टियां} एक {# प्रविष्टि} अन्य {# प्रविष्टियां}} मिली",
  "pages.NoContentType.button": "अपना पहला सामग्री-प्रकार बनाएं",
  "pages.NoContentType.text": "आपके पास अभी तक कोई सामग्री नहीं है, हम अनुशंसा करते हैं कि आप अपना पहला सामग्री-प्रकार बनाएं।",
  "permissions.not-allowed.create": "आपको दस्तावेज़ बनाने की अनुमति नहीं है",
  "permissions.not-allowed.update": "आपको यह दस्तावेज़ देखने की अनुमति नहीं है",
  "plugin.description.long": "अपने डेटाबेस में डेटा को देखने, संपादित करने और हटाने का त्वरित तरीका।",
  "plugin.description.short": "अपने डेटाबेस में डेटा को देखने, संपादित करने और हटाने का त्वरित तरीका।",
  "popover.display-relations.label": "प्रदर्शन संबंध",
  "success.record.delete": "हटाए गए",
  "success.record.publish": "प्रकाशित",
  "success.record.save": "बचाया",
  "success.record.unpublish": "अप्रकाशित",
  "utils.data-loaded": "{संख्या, बहुवचन, =1 {प्रविष्टि में} अन्य {प्रविष्टियां हैं}} सफलतापूर्वक लोड हो गए हैं",
  "apiError.This attribute must be unique": "{फ़ील्ड} अद्वितीय होना चाहिए",
  "popUpWarning.warning.publish-question": "क्या आप अब भी इसे प्रकाशित करना चाहते हैं?",
  "popUpwarning.warning.has-draft-relations.button-confirm": "हाँ, प्रकाशित करें",
  "popUpwarning.warning.has-draft-relations.message": "<b>{गिनती, बहुवचन, =0 { आपकी सामग्री संबंध है} एक { आपके सामग्री संबंधों में से} अन्य { आपके सामग्री संबंध हैं}}</b> अभी तक प्रकाशित नहीं हुए हैं।<br></br>यह आपके प्रोजेक्ट पर टूटी कड़ियाँ और त्रुटियाँ उत्पन्न कर सकता है।"
};
export {
  hi as default,
  groups,
  models,
  pageNotFound
};
//# sourceMappingURL=hi-Dwvd04m3.mjs.map

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { googleAddressModule } from "../src/googleAutocomplete"
import { googleAnalyticsCustomEvents } from "../src/googleAnalyticsCustomEvents"
import { navigationModule } from "../src/navigationModule"
import { resizePageModule } from "../src/resizePageModule"
import { videoModule } from "../src/videoModule"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("stylesheets/application.scss")

googleAddressModule()
googleAnalyticsCustomEvents()
navigationModule()
videoModule()
resizePageModule()
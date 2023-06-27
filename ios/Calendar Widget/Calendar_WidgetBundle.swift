//
//  Calendar_WidgetBundle.swift
//  Calendar Widget
//
//  Created by Anton on 6/27/23.
//

import WidgetKit
import SwiftUI

@main
struct Calendar_WidgetBundle: WidgetBundle {
    var body: some Widget {
        Calendar_Widget()
        Calendar_WidgetLiveActivity()
    }
}

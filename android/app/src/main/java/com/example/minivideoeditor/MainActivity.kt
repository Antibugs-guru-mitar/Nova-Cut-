package com.example.minivideoeditor

import android.os.Bundle
import android.graphics.Color
import android.view.Gravity
import android.widget.TextView
import androidx.activity.ComponentActivity

class MainActivity : ComponentActivity() {
    override fun onCreate(b: Bundle?) {
        super.onCreate(b)

        setContentView(
            TextView(this).apply {
                text = "NovaCut\nNative editor host"
                textSize = 22f
                setTextColor(Color.WHITE)
                gravity = Gravity.CENTER
                setBackgroundColor(Color.rgb(8, 10, 16))
            }
        )
    }
}

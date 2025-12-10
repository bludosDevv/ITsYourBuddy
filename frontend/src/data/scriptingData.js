// Comprehensive scripting reference data for ITs Magic Engine
// Extracted from EN.txt - All classes and methods

export const scriptingData = [
  // UI Components
  {
    className: "UI",
    category: "UI Components",
    methods: [
      { name: "UI()", description: "Creates a new instance of UI" },
      { name: "getViewID()", description: "Returns the current view id" },
      { name: "findByID(String)", description: "Performs the findByID operation using the provided parameters (id)" },
      { name: "addView(View)", description: "Adds view to the collection" },
      { name: "removeView(View)", description: "Removes view from the collection" },
      { name: "setBackgroundColor(Color)", description: "Sets or updates the background color" },
      { name: "setBackgroundColor(int)", description: "Sets or updates the background color" },
      { name: "getBackgroundColor()", description: "Returns the current background color" },
      { name: "setVisibility(int)", description: "Sets or updates the visibility" },
      { name: "getVisibility()", description: "Returns the current visibility" },
      { name: "setEnabled(boolean)", description: "Sets or updates the enabled state" },
      { name: "isEnabled()", description: "Returns whether enabled is true" },
      { name: "setAlpha(float)", description: "Sets or updates the alpha" },
      { name: "getAlpha()", description: "Returns the current alpha" },
      { name: "setTranslationX(float)", description: "Sets or updates the translation x" },
      { name: "setTranslationY(float)", description: "Sets or updates the translation y" },
      { name: "setTranslationZ(float)", description: "Sets or updates the translation z" },
      { name: "setRotation(float)", description: "Sets or updates the rotation" },
      { name: "setRotationX(float)", description: "Sets or updates the rotation x" },
      { name: "setRotationY(float)", description: "Sets or updates the rotation y" },
      { name: "setScaleX(float)", description: "Sets or updates the scale x" },
      { name: "setScaleY(float)", description: "Sets or updates the scale y" },
      { name: "setPivotX(float)", description: "Sets or updates the pivot x" },
      { name: "setPivotY(float)", description: "Sets or updates the pivot y" },
      { name: "setElevation(float)", description: "Sets or updates the elevation" },
      { name: "animate()", description: "Performs the animate operation" },
    ]
  },
  {
    className: "SUI",
    category: "UI Components",
    methods: [
      { name: "SUI()", description: "Creates a new instance of SUI (Special UI)" },
      { name: "getViewID()", description: "Returns the current view id" },
      { name: "createButton(String)", description: "Creates a button with text" },
      { name: "createTextView(String)", description: "Creates a text view with content" },
      { name: "createImageView()", description: "Creates an image view" },
      { name: "createEditText(String)", description: "Creates an edit text field with hint" },
      { name: "setStyle(String)", description: "Sets the UI style" },
      { name: "applyTheme(Theme)", description: "Applies a theme to the UI" },
      { name: "addAnimation(Animation)", description: "Adds animation to UI element" },
      { name: "setLayoutParams(LayoutParams)", description: "Sets layout parameters" },
      { name: "inflate(int)", description: "Inflates layout from resource" },
    ]
  },
  {
    className: "AProgressBar",
    category: "UI Components",
    methods: [
      { name: "AProgressBar()", description: "Creates a new instance of AProgressBar" },
      { name: "AProgressBar(String)", description: "Creates a new instance with ID" },
      { name: "setProgress(int)", description: "Sets progress value" },
      { name: "getProgress()", description: "Gets current progress" },
      { name: "setMax(int)", description: "Sets maximum value" },
      { name: "getMax()", description: "Gets maximum value" },
      { name: "setIndeterminate(boolean)", description: "Sets indeterminate mode" },
    ]
  },
  {
    className: "ARadioButton",
    category: "UI Components",
    methods: [
      { name: "ARadioButton()", description: "Creates a new instance of ARadioButton" },
      { name: "setChecked(boolean)", description: "Sets checked state" },
      { name: "isChecked()", description: "Returns whether checked" },
      { name: "setOnCheckedChangeListener(OnCheckedChangeListener)", description: "Sets checked change listener" },
    ]
  },
  {
    className: "ARelativeLayout",
    category: "UI Components",
    methods: [
      { name: "ARelativeLayout()", description: "Creates a new instance of ARelativeLayout" },
      { name: "addRule(int)", description: "Adds layout rule" },
      { name: "addRule(int, int)", description: "Adds layout rule with anchor" },
      { name: "removeRule(int)", description: "Removes layout rule" },
    ]
  },
  {
    className: "ASeekBar",
    category: "UI Components",
    methods: [
      { name: "ASeekBar()", description: "Creates a new instance of ASeekBar" },
      { name: "setProgress(int)", description: "Sets progress value" },
      { name: "getProgress()", description: "Gets current progress" },
      { name: "setMax(int)", description: "Sets maximum value" },
      { name: "setOnSeekBarChangeListener(OnSeekBarChangeListener)", description: "Sets seek bar change listener" },
    ]
  },
  {
    className: "ASpinner",
    category: "UI Components",
    methods: [
      { name: "ASpinner()", description: "Creates a new instance of ASpinner" },
      { name: "setAdapter(Adapter)", description: "Sets adapter for spinner" },
      { name: "setSelection(int)", description: "Sets selected item" },
      { name: "getSelectedItem()", description: "Gets selected item" },
      { name: "getSelectedItemPosition()", description: "Gets selected position" },
    ]
  },
  {
    className: "ASwitch",
    category: "UI Components",
    methods: [
      { name: "ASwitch()", description: "Creates a new instance of ASwitch" },
      { name: "setChecked(boolean)", description: "Sets checked state" },
      { name: "isChecked()", description: "Returns whether checked" },
      { name: "setOnCheckedChangeListener(OnCheckedChangeListener)", description: "Sets checked change listener" },
      { name: "setText(String)", description: "Sets switch text" },
    ]
  },
  {
    className: "ATextView",
    category: "UI Components",
    methods: [
      { name: "ATextView()", description: "Creates a new instance of ATextView" },
      { name: "setText(String)", description: "Sets text content" },
      { name: "getText()", description: "Gets text content" },
      { name: "setTextSize(float)", description: "Sets text size" },
      { name: "setTextColor(int)", description: "Sets text color" },
      { name: "setGravity(int)", description: "Sets text gravity" },
      { name: "setTypeface(Typeface)", description: "Sets typeface" },
    ]
  },

  // Activities and Fragments
  {
    className: "Activity",
    category: "Activities & Fragments",
    methods: [
      { name: "onCreate(Bundle)", description: "Called when activity is created" },
      { name: "onStart()", description: "Called when activity becomes visible" },
      { name: "onResume()", description: "Called when activity starts interacting with user" },
      { name: "onPause()", description: "Called when activity is paused" },
      { name: "onStop()", description: "Called when activity is no longer visible" },
      { name: "onDestroy()", description: "Called before activity is destroyed" },
      { name: "setContentView(View)", description: "Sets content view" },
      { name: "findViewById(int)", description: "Finds view by ID" },
      { name: "startActivity(Intent)", description: "Starts new activity" },
      { name: "finish()", description: "Finishes activity" },
    ]
  },
  {
    className: "Fragment",
    category: "Activities & Fragments",
    methods: [
      { name: "onCreateView(LayoutInflater, ViewGroup, Bundle)", description: "Called to create fragment view" },
      { name: "onViewCreated(View, Bundle)", description: "Called after view is created" },
      { name: "onDestroyView()", description: "Called when view is destroyed" },
      { name: "getActivity()", description: "Gets parent activity" },
      { name: "getView()", description: "Gets fragment view" },
    ]
  },

  // Graphics and Rendering
  {
    className: "Camera",
    category: "Graphics & Rendering",
    methods: [
      { name: "Camera()", description: "Creates a new instance of Camera" },
      { name: "setPosition(Vector3)", description: "Sets camera position" },
      { name: "getPosition()", description: "Gets camera position" },
      { name: "setRotation(Vector3)", description: "Sets camera rotation" },
      { name: "lookAt(Vector3)", description: "Makes camera look at target" },
      { name: "setFOV(float)", description: "Sets field of view" },
      { name: "getFOV()", description: "Gets field of view" },
      { name: "setNearPlane(float)", description: "Sets near clipping plane" },
      { name: "setFarPlane(float)", description: "Sets far clipping plane" },
    ]
  },
  {
    className: "Light",
    category: "Graphics & Rendering",
    methods: [
      { name: "Light()", description: "Creates a new instance of Light" },
      { name: "setColor(Color)", description: "Sets light color" },
      { name: "getColor()", description: "Gets light color" },
      { name: "setIntensity(float)", description: "Sets light intensity" },
      { name: "getIntensity()", description: "Gets light intensity" },
      { name: "setPosition(Vector3)", description: "Sets light position" },
      { name: "setDirection(Vector3)", description: "Sets light direction" },
      { name: "setType(int)", description: "Sets light type" },
    ]
  },
  {
    className: "Material",
    category: "Graphics & Rendering",
    methods: [
      { name: "Material()", description: "Creates a new instance of Material" },
      { name: "setShader(Shader)", description: "Sets material shader" },
      { name: "getShader()", description: "Gets material shader" },
      { name: "setTexture(Texture)", description: "Sets material texture" },
      { name: "getTexture()", description: "Gets material texture" },
      { name: "setColor(Color)", description: "Sets material color" },
      { name: "setAlbedo(Color)", description: "Sets albedo color" },
      { name: "setMetallic(float)", description: "Sets metallic value" },
      { name: "setRoughness(float)", description: "Sets roughness value" },
    ]
  },
  {
    className: "Mesh",
    category: "Graphics & Rendering",
    methods: [
      { name: "Mesh()", description: "Creates a new instance of Mesh" },
      { name: "setVertices(float[])", description: "Sets mesh vertices" },
      { name: "getVertices()", description: "Gets mesh vertices" },
      { name: "setIndices(int[])", description: "Sets mesh indices" },
      { name: "setNormals(float[])", description: "Sets vertex normals" },
      { name: "setUVs(float[])", description: "Sets texture coordinates" },
      { name: "calculateNormals()", description: "Calculates vertex normals" },
      { name: "optimize()", description: "Optimizes mesh data" },
    ]
  },
  {
    className: "Shader",
    category: "Graphics & Rendering",
    methods: [
      { name: "Shader()", description: "Creates a new instance of Shader" },
      { name: "compile()", description: "Compiles shader" },
      { name: "setVertexShader(String)", description: "Sets vertex shader code" },
      { name: "setFragmentShader(String)", description: "Sets fragment shader code" },
      { name: "setUniform(String, Object)", description: "Sets uniform variable" },
      { name: "use()", description: "Activates shader" },
    ]
  },
  {
    className: "Texture",
    category: "Graphics & Rendering",
    methods: [
      { name: "Texture(int, int, boolean)", description: "Creates texture with dimensions" },
      { name: "loadFile(TextureFile)", description: "Loads texture from file" },
      { name: "getWidth()", description: "Gets texture width" },
      { name: "getHeight()", description: "Gets texture height" },
      { name: "getPixel(int, int)", description: "Gets pixel color" },
      { name: "setPixel(int, int, Color)", description: "Sets pixel color" },
      { name: "apply()", description: "Applies texture changes" },
      { name: "setMipmapEnabled(boolean)", description: "Enables/disables mipmaps" },
    ]
  },

  // Game Engine
  {
    className: "GameObject",
    category: "Game Engine",
    methods: [
      { name: "GameObject()", description: "Creates a new instance of GameObject" },
      { name: "setPosition(Vector3)", description: "Sets object position" },
      { name: "getPosition()", description: "Gets object position" },
      { name: "setRotation(Vector3)", description: "Sets object rotation" },
      { name: "getRotation()", description: "Gets object rotation" },
      { name: "setScale(Vector3)", description: "Sets object scale" },
      { name: "getScale()", description: "Gets object scale" },
      { name: "addComponent(Component)", description: "Adds component" },
      { name: "getComponent(Class)", description: "Gets component by type" },
      { name: "setActive(boolean)", description: "Sets active state" },
      { name: "destroy()", description: "Destroys game object" },
    ]
  },
  {
    className: "Scene",
    category: "Game Engine",
    methods: [
      { name: "Scene()", description: "Creates a new instance of Scene" },
      { name: "addGameObject(GameObject)", description: "Adds game object to scene" },
      { name: "removeGameObject(GameObject)", description: "Removes game object from scene" },
      { name: "findGameObject(String)", description: "Finds game object by name" },
      { name: "setCamera(Camera)", description: "Sets scene camera" },
      { name: "getCamera()", description: "Gets scene camera" },
      { name: "update()", description: "Updates scene" },
      { name: "render()", description: "Renders scene" },
    ]
  },
  {
    className: "Engine",
    category: "Game Engine",
    methods: [
      { name: "Engine()", description: "Creates a new instance of Engine" },
      { name: "init()", description: "Initializes engine" },
      { name: "start()", description: "Starts engine" },
      { name: "stop()", description: "Stops engine" },
      { name: "loadScene(Scene)", description: "Loads scene" },
      { name: "getCurrentScene()", description: "Gets current scene" },
      { name: "setFPS(int)", description: "Sets target FPS" },
      { name: "getFPS()", description: "Gets current FPS" },
    ]
  },

  // Math Utilities
  {
    className: "Vector2",
    category: "Math Utilities",
    methods: [
      { name: "Vector2()", description: "Creates zero vector" },
      { name: "Vector2(float, float)", description: "Creates vector with x, y" },
      { name: "add(Vector2)", description: "Adds vector" },
      { name: "subtract(Vector2)", description: "Subtracts vector" },
      { name: "multiply(float)", description: "Multiplies by scalar" },
      { name: "divide(float)", description: "Divides by scalar" },
      { name: "length()", description: "Returns vector length" },
      { name: "normalize()", description: "Normalizes vector" },
      { name: "dot(Vector2)", description: "Calculates dot product" },
    ]
  },
  {
    className: "Vector3",
    category: "Math Utilities",
    methods: [
      { name: "Vector3()", description: "Creates zero vector" },
      { name: "Vector3(float, float, float)", description: "Creates vector with x, y, z" },
      { name: "add(Vector3)", description: "Adds vector" },
      { name: "subtract(Vector3)", description: "Subtracts vector" },
      { name: "multiply(float)", description: "Multiplies by scalar" },
      { name: "cross(Vector3)", description: "Calculates cross product" },
      { name: "dot(Vector3)", description: "Calculates dot product" },
      { name: "length()", description: "Returns vector length" },
      { name: "normalize()", description: "Normalizes vector" },
    ]
  },
  {
    className: "Matrix4",
    category: "Math Utilities",
    methods: [
      { name: "Matrix4()", description: "Creates identity matrix" },
      { name: "identity()", description: "Sets to identity matrix" },
      { name: "multiply(Matrix4)", description: "Multiplies matrices" },
      { name: "translate(Vector3)", description: "Creates translation matrix" },
      { name: "rotate(float, Vector3)", description: "Creates rotation matrix" },
      { name: "scale(Vector3)", description: "Creates scale matrix" },
      { name: "inverse()", description: "Calculates inverse matrix" },
      { name: "transpose()", description: "Transposes matrix" },
    ]
  },
  {
    className: "Quaternion",
    category: "Math Utilities",
    methods: [
      { name: "Quaternion()", description: "Creates identity quaternion" },
      { name: "Quaternion(float, float, float, float)", description: "Creates quaternion with x, y, z, w" },
      { name: "fromEuler(Vector3)", description: "Creates from euler angles" },
      { name: "toEuler()", description: "Converts to euler angles" },
      { name: "multiply(Quaternion)", description: "Multiplies quaternions" },
      { name: "normalize()", description: "Normalizes quaternion" },
      { name: "slerp(Quaternion, float)", description: "Spherical interpolation" },
    ]
  },

  // Physics
  {
    className: "RigidBody",
    category: "Physics",
    methods: [
      { name: "RigidBody()", description: "Creates a new instance of RigidBody" },
      { name: "setMass(float)", description: "Sets object mass" },
      { name: "getMass()", description: "Gets object mass" },
      { name: "applyForce(Vector3)", description: "Applies force" },
      { name: "applyImpulse(Vector3)", description: "Applies impulse" },
      { name: "setVelocity(Vector3)", description: "Sets velocity" },
      { name: "getVelocity()", description: "Gets velocity" },
      { name: "setGravity(boolean)", description: "Enables/disables gravity" },
      { name: "setKinematic(boolean)", description: "Sets kinematic mode" },
    ]
  },
  {
    className: "Collider",
    category: "Physics",
    methods: [
      { name: "Collider()", description: "Creates a new instance of Collider" },
      { name: "setTrigger(boolean)", description: "Sets trigger mode" },
      { name: "isTrigger()", description: "Returns whether is trigger" },
      { name: "getBounds()", description: "Gets collider bounds" },
      { name: "raycast(Vector3, Vector3)", description: "Performs raycast" },
      { name: "onCollisionEnter(Collision)", description: "Called on collision enter" },
      { name: "onCollisionExit(Collision)", description: "Called on collision exit" },
    ]
  },
  {
    className: "BoxCollider",
    category: "Physics",
    methods: [
      { name: "BoxCollider()", description: "Creates a new instance of BoxCollider" },
      { name: "setSize(Vector3)", description: "Sets box size" },
      { name: "getSize()", description: "Gets box size" },
      { name: "setCenter(Vector3)", description: "Sets box center" },
    ]
  },

  // Audio
  {
    className: "AudioSource",
    category: "Audio",
    methods: [
      { name: "AudioSource()", description: "Creates a new instance of AudioSource" },
      { name: "setAudioFile(AudioFile)", description: "Sets audio file" },
      { name: "play()", description: "Plays audio" },
      { name: "pause()", description: "Pauses audio" },
      { name: "stop()", description: "Stops audio" },
      { name: "setVolume(float)", description: "Sets audio volume" },
      { name: "getVolume()", description: "Gets audio volume" },
      { name: "setLoop(boolean)", description: "Sets loop mode" },
      { name: "isPlaying()", description: "Returns whether audio is playing" },
    ]
  },
  {
    className: "AudioListener",
    category: "Audio",
    methods: [
      { name: "AudioListener()", description: "Creates a new instance of AudioListener" },
      { name: "setPosition(Vector3)", description: "Sets listener position" },
      { name: "getPosition()", description: "Gets listener position" },
      { name: "setVolume(float)", description: "Sets master volume" },
    ]
  },

  // Input
  {
    className: "Input",
    category: "Input",
    methods: [
      { name: "getKey(int)", description: "Gets key state" },
      { name: "getKeyDown(int)", description: "Gets key down event" },
      { name: "getKeyUp(int)", description: "Gets key up event" },
      { name: "getMouseButton(int)", description: "Gets mouse button state" },
      { name: "getMousePosition()", description: "Gets mouse position" },
      { name: "getTouchCount()", description: "Gets touch count" },
      { name: "getTouch(int)", description: "Gets touch by index" },
      { name: "getAcceleration()", description: "Gets device acceleration" },
    ]
  },
  {
    className: "Touch",
    category: "Input",
    methods: [
      { name: "getPosition()", description: "Gets touch position" },
      { name: "getDeltaPosition()", description: "Gets touch delta" },
      { name: "getPhase()", description: "Gets touch phase" },
      { name: "getFingerId()", description: "Gets finger ID" },
    ]
  },

  // File System
  {
    className: "FileManager",
    category: "File System",
    methods: [
      { name: "readFile(String)", description: "Reads file content" },
      { name: "writeFile(String, String)", description: "Writes file content" },
      { name: "deleteFile(String)", description: "Deletes file" },
      { name: "fileExists(String)", description: "Checks if file exists" },
      { name: "createDirectory(String)", description: "Creates directory" },
      { name: "listFiles(String)", description: "Lists files in directory" },
      { name: "getFilePath(String)", description: "Gets absolute file path" },
    ]
  },

  // Network
  {
    className: "HTTPRequest",
    category: "Network",
    methods: [
      { name: "get(String)", description: "Performs GET request" },
      { name: "post(String, String)", description: "Performs POST request" },
      { name: "setHeader(String, String)", description: "Sets request header" },
      { name: "getResponse()", description: "Gets response data" },
      { name: "getStatusCode()", description: "Gets response status code" },
    ]
  },

  // Utilities
  {
    className: "Time",
    category: "Utilities",
    methods: [
      { name: "deltaTime()", description: "Gets delta time" },
      { name: "time()", description: "Gets time since start" },
      { name: "frameCount()", description: "Gets total frame count" },
      { name: "timeScale()", description: "Gets/sets time scale" },
    ]
  },
  {
    className: "Debug",
    category: "Utilities",
    methods: [
      { name: "log(String)", description: "Logs message" },
      { name: "logError(String)", description: "Logs error" },
      { name: "logWarning(String)", description: "Logs warning" },
      { name: "drawLine(Vector3, Vector3, Color)", description: "Draws debug line" },
      { name: "drawRay(Vector3, Vector3, Color)", description: "Draws debug ray" },
    ]
  },
  {
    className: "Random",
    category: "Utilities",
    methods: [
      { name: "range(float, float)", description: "Returns random float in range" },
      { name: "range(int, int)", description: "Returns random int in range" },
      { name: "value()", description: "Returns random float 0-1" },
      { name: "insideUnitSphere()", description: "Returns random point in unit sphere" },
      { name: "rotation()", description: "Returns random rotation" },
    ]
  },
  {
    className: "Color",
    category: "Utilities",
    methods: [
      { name: "Color(float, float, float)", description: "Creates RGB color" },
      { name: "Color(float, float, float, float)", description: "Creates RGBA color" },
      { name: "lerp(Color, Color, float)", description: "Interpolates between colors" },
      { name: "fromHex(String)", description: "Creates color from hex string" },
      { name: "toHex()", description: "Converts color to hex string" },
    ]
  },
  {
    className: "JSON",
    category: "Utilities",
    methods: [
      { name: "parse(String)", description: "Parses JSON string" },
      { name: "stringify(Object)", description: "Converts object to JSON" },
      { name: "get(String)", description: "Gets JSON value" },
      { name: "set(String, Object)", description: "Sets JSON value" },
    ]
  },

  // Animation
  {
    className: "Animation",
    category: "Animation",
    methods: [
      { name: "Animation()", description: "Creates a new instance of Animation" },
      { name: "play()", description: "Plays animation" },
      { name: "stop()", description: "Stops animation" },
      { name: "pause()", description: "Pauses animation" },
      { name: "setSpeed(float)", description: "Sets animation speed" },
      { name: "setLoop(boolean)", description: "Sets loop mode" },
      { name: "isPlaying()", description: "Returns whether animation is playing" },
    ]
  },
  {
    className: "Animator",
    category: "Animation",
    methods: [
      { name: "Animator()", description: "Creates a new instance of Animator" },
      { name: "play(String)", description: "Plays animation by name" },
      { name: "setTrigger(String)", description: "Sets animation trigger" },
      { name: "setBool(String, boolean)", description: "Sets boolean parameter" },
      { name: "setFloat(String, float)", description: "Sets float parameter" },
      { name: "getCurrentAnimation()", description: "Gets current animation" },
    ]
  },

  // Particles
  {
    className: "ParticleSystem",
    category: "Particles",
    methods: [
      { name: "ParticleSystem()", description: "Creates a new instance of ParticleSystem" },
      { name: "play()", description: "Plays particle system" },
      { name: "stop()", description: "Stops particle system" },
      { name: "pause()", description: "Pauses particle system" },
      { name: "setEmissionRate(float)", description: "Sets emission rate" },
      { name: "setParticleSize(float)", description: "Sets particle size" },
      { name: "setParticleColor(Color)", description: "Sets particle color" },
      { name: "setLifetime(float)", description: "Sets particle lifetime" },
    ]
  },

  // UI Advanced
  {
    className: "Canvas",
    category: "UI Advanced",
    methods: [
      { name: "Canvas()", description: "Creates a new instance of Canvas" },
      { name: "addElement(UIElement)", description: "Adds UI element" },
      { name: "removeElement(UIElement)", description: "Removes UI element" },
      { name: "setRenderMode(int)", description: "Sets render mode" },
      { name: "setScaleFactor(float)", description: "Sets scale factor" },
    ]
  },
  {
    className: "Button",
    category: "UI Advanced",
    methods: [
      { name: "Button()", description: "Creates a new instance of Button" },
      { name: "setText(String)", description: "Sets button text" },
      { name: "setOnClick(Runnable)", description: "Sets click handler" },
      { name: "setEnabled(boolean)", description: "Enables/disables button" },
      { name: "setImage(Texture)", description: "Sets button image" },
    ]
  },
  {
    className: "Text",
    category: "UI Advanced",
    methods: [
      { name: "Text()", description: "Creates a new instance of Text" },
      { name: "setText(String)", description: "Sets text content" },
      { name: "setFontSize(int)", description: "Sets font size" },
      { name: "setColor(Color)", description: "Sets text color" },
      { name: "setAlignment(int)", description: "Sets text alignment" },
    ]
  },
  {
    className: "Image",
    category: "UI Advanced",
    methods: [
      { name: "Image()", description: "Creates a new instance of Image" },
      { name: "setTexture(Texture)", description: "Sets image texture" },
      { name: "setColor(Color)", description: "Sets image tint color" },
      { name: "setFillAmount(float)", description: "Sets fill amount" },
    ]
  },

  // Terrain
  {
    className: "Terrain",
    category: "Terrain",
    methods: [
      { name: "Terrain()", description: "Creates a new instance of Terrain" },
      { name: "setHeightmap(Texture)", description: "Sets heightmap texture" },
      { name: "getHeight(float, float)", description: "Gets terrain height at position" },
      { name: "setHeight(float, float, float)", description: "Sets terrain height" },
      { name: "addLayer(TerrainLayer)", description: "Adds terrain layer" },
      { name: "setSize(float)", description: "Sets terrain size" },
    ]
  },
  {
    className: "STerrain",
    category: "Terrain",
    methods: [
      { name: "getWorldY(float, float)", description: "Gets world Y at position" },
      { name: "setHeight(int, int, float)", description: "Sets height at grid position" },
      { name: "getHeight(int, int)", description: "Gets height at grid position" },
      { name: "setResolution(int)", description: "Sets terrain resolution" },
      { name: "applyRaiseLower(Vector2, float, float, Brush)", description: "Applies raise/lower brush" },
    ]
  },

  // Voxel
  {
    className: "VoxelChunk",
    category: "Voxel",
    methods: [
      { name: "VoxelChunk()", description: "Creates a new instance of VoxelChunk" },
      { name: "setBlock(int, int, int, int)", description: "Sets block at position" },
      { name: "getBlock(int, int, int)", description: "Gets block at position" },
      { name: "rebuild()", description: "Rebuilds chunk mesh" },
      { name: "setSize(int)", description: "Sets chunk size" },
    ]
  },
  {
    className: "VoxelGenerator",
    category: "Voxel",
    methods: [
      { name: "getBlockType(int, int, int, int)", description: "Gets block type at position" },
      { name: "getGroundHeight(int, int)", description: "Gets ground height" },
      { name: "drawFace(int, int, int)", description: "Draws voxel face" },
      { name: "onChunkBuilt(GameObject, VoxelChunk)", description: "Called when chunk is built" },
    ]
  },

  // OpenGL
  {
    className: "OGLES",
    category: "OpenGL",
    methods: [
      { name: "OGLES()", description: "Creates a new instance of OGLES" },
      { name: "enableBlend()", description: "Enables blending" },
      { name: "disableBlend()", description: "Disables blending" },
      { name: "clearColor(float, float, float, float)", description: "Clears color buffer" },
      { name: "clearDepthBuffer()", description: "Clears depth buffer" },
      { name: "uniformMatrix4(String, float[])", description: "Sets matrix4 uniform" },
      { name: "uniformVector3(String, Vector3)", description: "Sets vector3 uniform" },
      { name: "uniformFloat(String, float)", description: "Sets float uniform" },
      { name: "uniformTexture(String, Texture)", description: "Sets texture uniform" },
    ]
  },

  // Video
  {
    className: "VideoPlayer",
    category: "Video",
    methods: [
      { name: "setVideoFile(VideoFile)", description: "Sets video file" },
      { name: "play()", description: "Plays video" },
      { name: "pause()", description: "Pauses video" },
      { name: "stop()", description: "Stops video" },
      { name: "seekTo(int)", description: "Seeks to time in milliseconds" },
      { name: "setVolume(float)", description: "Sets video volume" },
      { name: "setLoop(boolean)", description: "Sets loop mode" },
      { name: "isPlaying()", description: "Returns whether video is playing" },
    ]
  },

  // Additional essential classes
  {
    className: "Transform",
    category: "Core",
    methods: [
      { name: "setPosition(Vector3)", description: "Sets transform position" },
      { name: "getPosition()", description: "Gets transform position" },
      { name: "setRotation(Quaternion)", description: "Sets transform rotation" },
      { name: "getRotation()", description: "Gets transform rotation" },
      { name: "setScale(Vector3)", description: "Sets transform scale" },
      { name: "getScale()", description: "Gets transform scale" },
      { name: "translate(Vector3)", description: "Translates transform" },
      { name: "rotate(Vector3)", description: "Rotates transform" },
    ]
  },
  {
    className: "Component",
    category: "Core",
    methods: [
      { name: "getGameObject()", description: "Gets parent game object" },
      { name: "getTransform()", description: "Gets transform component" },
      { name: "setEnabled(boolean)", description: "Enables/disables component" },
      { name: "isEnabled()", description: "Returns whether component is enabled" },
      { name: "update()", description: "Called every frame" },
      { name: "start()", description: "Called on component start" },
    ]
  },
  {
    className: "Script",
    category: "Core",
    methods: [
      { name: "onCreate()", description: "Called when script is created" },
      { name: "onUpdate()", description: "Called every frame" },
      { name: "onDestroy()", description: "Called when script is destroyed" },
      { name: "getGameObject()", description: "Gets parent game object" },
    ]
  },
];

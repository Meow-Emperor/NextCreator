import {
  Camera,
  Sparkles,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  ImagePlus,
  Home,
  Megaphone,
  Globe,
  User,
} from "lucide-react";
import type { ImageGenerationParams } from "@/types";

// 节点模板配置 - 定义拖拽到画布时创建的节点组合
export interface PromptNodeTemplate {
  requiresImageInput: boolean;  // 是否需要图片输入节点
  generatorType: "pro" | "fast"; // 使用哪个生成器
  aspectRatio: ImageGenerationParams["aspectRatio"]; // 默认宽高比
}

// 提示词分类定义
export interface PromptCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  prompts: PromptItem[];
}

// 单个提示词定义
export interface PromptItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  prompt: string;
  tags: string[];
  source?: string;
  previewImage?: string; // 预览图 URL
  nodeTemplate: PromptNodeTemplate; // 节点模板配置
}

// 提示词分类配置
export const promptCategories: PromptCategory[] = [
  {
    id: "photorealism",
    name: "照片写实",
    nameEn: "Photorealism & Aesthetics",
    icon: "Camera",
    description: "高保真照片级别的提示词，包含复杂光线、纹理和特定时代风格",
    prompts: [
      {
        id: "hyper-realistic-crowd",
        title: "超写实人群合影",
        titleEn: "Hyper-Realistic Crowd Composition",
        description: "处理复杂构图，包含多个人物和特定光线",
        prompt: `Create a hyper-realistic, ultra-sharp, full-color large-format image featuring a massive group of celebrities from different eras, all standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.

GENERAL STYLE & MOOD: Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden rim light. High dynamic range, calibrated color grading. Skin tones perfectly accurate. Crisp fabric detail with individual threads visible. Balanced composition, slightly wide-angle lens (35mm), center-weighted. All celebrities interacting naturally, smiling, posing, or conversing. Minimal background noise, but with enough world-building to feel real.

THE ENVIRONMENT: A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline. Elements include: Warm golden light wrapping around silhouettes. Polished marble.`,
        tags: ["人像", "群像", "写实", "电影感"],
        source: "@SebJefferies",
        previewImage: "https://github.com/user-attachments/assets/3a056a8d-904e-4b3e-b0d2-b5122758b7f5",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "2000s-mirror-selfie",
        title: "2000年代复古自拍",
        titleEn: "2000s Mirror Selfie",
        description: "生成早期2000年代风格的闪光灯自拍照",
        prompt: `Create a 2000s Mirror Selfie.

{
  "subject": {
    "description": "A young woman taking a mirror selfie with very long voluminous dark waves and soft wispy bangs",
    "age": "young adult",
    "expression": "confident and slightly playful",
    "hair": {
      "color": "dark",
      "style": "very long, voluminous waves with soft wispy bangs"
    },
    "clothing": {
      "top": {
        "type": "fitted cropped t-shirt",
        "color": "cream white",
        "details": "features a large cute anime-style cat face graphic with big blue eyes, whiskers, and a small pink mouth"
      }
    },
    "face": {
      "preserve_original": true,
      "makeup": "natural glam makeup with soft pink dewy blush and glossy red pouty lips"
    }
  },
  "photography": {
    "camera_style": "early-2000s digital camera aesthetic",
    "lighting": "harsh super-flash with bright blown-out highlights but subject still visible",
    "angle": "mirror selfie",
    "shot_type": "tight selfie composition",
    "texture": "subtle grain, retro highlights, V6 realism, crisp details, soft shadows"
  },
  "background": {
    "setting": "nostalgic early-2000s bedroom",
    "wall_color": "pastel tones",
    "elements": ["chunky wooden dresser", "CD player", "posters of 2000s pop icons", "hanging beaded door curtain", "cluttered vanity with lip glosses"],
    "atmosphere": "authentic 2000s nostalgic vibe",
    "lighting": "retro"
  }
}`,
        tags: ["复古", "自拍", "2000s", "怀旧"],
        source: "@ZaraIrahh",
        previewImage: "https://github.com/user-attachments/assets/b71755dc-ff33-4872-8161-3f5066e0ccb6",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "professional-headshot",
        title: "专业商务头像",
        titleEn: "Professional Headshot Creator",
        description: "将普通照片转换为专业的商务风格头像",
        prompt: `A professional, high-resolution profile photo, maintaining the exact facial structure, identity, and key features of the person in the input image. The subject is framed from the chest up, with ample headroom. The person looks directly at the camera. They are styled for a professional photo studio shoot, wearing a premium smart casual blazer in a subtle charcoal gray. The background is a solid neutral studio color. Shot from a high angle with bright and airy soft, diffused studio lighting, gently illuminating the face and creating a subtle catchlight in the eyes, conveying a sense of clarity. Captured on an 85mm f/1.8 lens with a shallow depth of field, exquisite focus on the eyes, and beautiful, soft bokeh. Observe crisp detail on the fabric texture of the blazer, individual strands of hair, and natural, realistic skin texture. The atmosphere exudes confidence, professionalism, and approachability. Clean and bright cinematic color grading with subtle warmth and balanced tones, ensuring a polished and contemporary feel.`,
        tags: ["商务", "头像", "专业", "LinkedIn"],
        source: "@PavolRusnak",
        previewImage: "https://pbs.twimg.com/media/G6x00O_XIAASY0r?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "1990s-portrait",
        title: "90年代胶片人像",
        titleEn: "1990s Camera Style Portrait",
        description: "复制特定胶片质感、闪光摄影和时代氛围",
        prompt: `Without changing her original face, create a portrait of a beautiful young woman with porcelain-white skin, captured with a 1990s-style camera using a direct front flash. Her messy dark brown hair is tied up, posing with a calm yet playful smile. She wears a modern oversized cream sweater. The background is a dark white wall covered with aesthetic magazine posters and stickers, evoking a cozy bedroom or personal room atmosphere under dim lighting. The 35mm lens flash creates a nostalgic glow.`,
        tags: ["复古", "胶片", "90年代", "人像"],
        source: "@kingofdairyque",
        previewImage: "https://github.com/user-attachments/assets/eca5066b-1bf6-4a97-8b81-63e9e7435050",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "victorias-secret",
        title: "维密风格写真",
        titleEn: "Victoria's Secret Style Photoshoot",
        description: "创建高端奢华、后台风格的时尚摄影",
        prompt: `Create a glamorous photoshoot in the style of Victoria's Secret. A young woman attached in the uploaded reference image ( Keep the face of the person 100% accurate from the reference image ) stands almost sideways, slightly bent forward, during the final preparation for the show. Makeup artists apply lipstick to her (only her hands are visible in the frame). She is wearing a corset decorated with beaded embroidery and crystals with a short fluffy skirt, as well as large feather wings. The image has a "backstage" effect.

The background is a darkly lit room, probably under the podium. The main emphasis is on the girl's face and the details of her costume. Emphasize the expressiveness of the gaze and the luxurious look of the outfit. The photo is lit by a flash from the camera, which emphasizes the shine of the beads and crystals on the corset, as well as the girl's shiny skin. Victoria's Secret style: sensuality, luxury, glamour. Very detailed. Important: do not change the face.`,
        tags: ["时尚", "奢华", "维密", "后台"],
        source: "@NanoBanana_labs",
        previewImage: "https://github.com/user-attachments/assets/963c0a46-cf86-4604-8782-524b94afc51d",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "emotional-film",
        title: "电影感胶片摄影",
        titleEn: "Emotional Film Photography",
        description: "创建电影感的柯达Portra风格照片",
        prompt: `Keep the facial features of the person in the uploaded image exactly consistent. Style: A cinematic, emotional portrait shot on Kodak Portra 400 film. Setting: An urban street coffee shop window at Golden Hour (sunset). Warm, nostalgic lighting hitting the side of the face. Atmosphere: Apply a subtle film grain and soft focus to create a dreamy, storytelling vibe. Action: The subject is looking slightly away from the camera, holding a coffee cup, with a relaxed, candid expression. Details: High quality, depth of field, bokeh background of city lights.`,
        tags: ["电影感", "胶片", "柯达", "怀旧"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/243d1b11-9ef0-4d4f-b308-97d67b5d3bc3",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "anime-portrait-spotlight",
        title: "超写实动漫人像",
        titleEn: "Hyperrealistic Anime Portrait in Spotlight",
        description: "带有戏剧性光线的超写实动漫风格人像",
        prompt: `Generate a hyperrealistic realistic-anime portrait of a female character standing in a completely black background.
Lighting: use a **narrow beam spotlight** focused only on the center of the face.
The edges of the light must be sharp and dramatic.
All areas outside the spotlight should fall quickly into deep darkness
(high falloff shadow), almost blending into the black background.
Not soft lighting.
Hair: long dark hair with some strands falling over the face. The lower parts of the hair should fade into the shadows.
Pose: one hand raised gently to the lips in a shy, hesitant gesture.
Eyes looking directly at the camera with a mysterious mood.
Clothing: black long-sleeve knit sweater;
the sweater and body should mostly disappear into the darkness with minimal detail.
Overall tone: dark, moody, dramatic, mysterious.
High-contrast only in the lit portion of the face.
Everything outside the spotlight should be nearly invisible.`,
        tags: ["动漫", "人像", "戏剧性光线", "超写实"],
        source: "@SimplyAnnisa",
        previewImage: "https://pbs.twimg.com/media/G7Ah9SIbIAAGlyu?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "magazine-cover",
        title: "杂志封面",
        titleEn: "Magazine Cover Portrait",
        description: "创建光鲜的杂志封面",
        prompt: `A photo of a glossy magazine cover, the cover has the large bold words "Nano Banana Pro". The text is in a serif font, black on white, and fills the view. No other text.

In front of the text there is a dynamic portrait of a person in green and banana yellow colored high-end fashion.

Put the issue number and today's date in the corner along with a barcode and a price. The magazine is on a white shelf against a wall.`,
        tags: ["杂志", "封面", "时尚", "设计"],
        source: "@NanoBanana",
        previewImage: "https://pbs.twimg.com/media/G7QmCFcXoAAwaet?format=jpg&name=large",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "luxury-product",
        title: "奢侈品产品摄影",
        titleEn: "Luxury Product Photography",
        description: "创建漂浮的奢侈品产品照片",
        prompt: `Product:
[BRAND] [PRODUCT NAME] - [bottle shape], [label description], [liquid color]

Scene:
Luxury product shot floating on dark water with [flower type] in [colors] arranged around it.
[Lighting style - e.g., "golden hour glow" / "bright fresh light"] creates reflections and ripples across the water.

Mood & Style:
[Adjectives - e.g., "ethereal and luxurious" / "fresh and clean"], high-end commercial photography, [camera angle], shallow depth of field with soft bokeh background`,
        tags: ["产品", "奢侈品", "商业摄影", "电商"],
        source: "@AmirMushich",
        previewImage: "https://raw.githubusercontent.com/ZeroLu/awesome-nanobanana-pro/refs/heads/main/assets/luxury-product-shot.jpg",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "fisheye-movie-selfie",
        title: "鱼眼电影角色合影",
        titleEn: "Fisheye Movie Character Selfie",
        description: "与电影角色的360度鱼眼自拍",
        prompt: `A film-like fisheye wide-angle 360-degree selfie without any camera or phone visible in the subject's hands. A real and exaggerated selfie of [person from uploaded image] with [CHARACTERS]. They are making faces at the camera.

(more detailed version)
A hyper-realistic fisheye wide-angle selfie, captured with a vintage 35mm fisheye lens creating heavy barrel distortion. without any camera or phone visible in the subject's hands.
Subject & Action: A close-up, distorted group photo featuring [Person From Uploaded Image] taking selfie with [CHARACTERS]. Everyone is making wild, exaggerated faces, squinting slightly from the flash.
Lighting & Texture: Harsh, direct on-camera flash lighting that creates hard shadows behind the subjects. Authentic film grain, slight motion blur on the edges, and chromatic aberration. It looks like a candid, amateur snapshot as if captured during a chaotic behind-the-scenes moment, not a studio photo.`,
        tags: ["鱼眼", "电影", "自拍", "创意"],
        source: "@Arminn_Ai",
        previewImage: "https://pbs.twimg.com/media/G7Q6stnXIAAe7Vz?format=jpg&name=small",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "museum-selfie",
        title: "博物馆油画合影",
        titleEn: "Museum Art Exhibition Selfie",
        description: "在博物馆与自己的油画肖像合影",
        prompt: `A commercial grade photograph of [uploaed reference image] posing inside a high-end museum exhibition space.
[the character Source: Based strictly on the uploaded reference image.
Behind them hangs a large, ornate framed classical oil painting.

The painting depicts the same person but rendered in a rich,
traditional oil painting style with thick, visible impasto brushstrokes, deep textures, and rich color palettes on canvas.
Gallery spotlights hit the textured paint surface.
Masterpiece, ultra-detailed, cinematic lighting, strong contrast, dramatic shadows, 8K UHD, highly detailed textures
, professional photography.`,
        tags: ["博物馆", "油画", "艺术", "创意"],
        source: "@brad_zhang2024",
        previewImage: "https://pbs.twimg.com/media/G7N2KUIbMAAspf6?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "compact-camera-screen",
        title: "相机屏幕显示",
        titleEn: "Compact Camera Screen Display",
        description: "照片显示在卡片相机屏幕上的效果",
        prompt: `Use facial feature of attached photo. A close-up shot of a young woman displayed on the screen of a compact Canon digital camera. The camera body surrounds the image with its buttons, dials, and textured surface visible, including the FUNC/SET wheel, DISP button, and the "IMAGE STABILIZER" label along the side. The photo on the screen shows the woman indoors at night, illuminated by a bright built-in flash that creates sharp highlights on her face and hair. She has long dark hair falling across part of her face in loose strands, with a soft, slightly open-lip expression. The flash accentuates her features against a dim, cluttered kitchen background with appliances, shelves, and metallic surfaces softly blurred. The mood is candid, raw, nostalgic, and reminiscent of early 2000s digital camera snapshots. Colors are slightly muted with cool undertones, strong flash contrast, and natural grain from the display. No text, no logos inside the photo preview itself.

Scale ratio: 4:5 vertical

Camera: compact digital camera simulation
Lens: equivalent to 28–35mm
Aperture: f/2.8
ISO: 400
Shutter speed: 1/60 with flash
White balance: auto flash
Lighting: harsh direct flash on subject, ambient low light in the background
Color grading: nostalgic digital-camera tones, high contrast flash, subtle display grain, authentic screen glow.`,
        tags: ["相机", "屏幕", "复古", "怀旧"],
        source: "@kingofdairyque",
        previewImage: "https://pbs.twimg.com/media/G7NVohbbgAcUFBe?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "4:5" },
      },
      {
        id: "portrait-puppy-snow",
        title: "雪景小狗合影",
        titleEn: "Portrait with Puppy in Snow",
        description: "冬季雪景中与小狗的合影",
        prompt: `{
  "image_description": {
    "subject": {
      "face": {
        "preserve_original": true,
        "reference_match": true,
        "description": "The girl's facial features, expression, and identity must remain exactly the same as the reference image."
      },
      "girl": {
        "age": "young",
        "hair": "long, wavy brown hair",
        "expression": "puckering her lips toward the camera",
        "clothing": "black hooded sweatshirt"
      },
      "puppy": {
        "type": "small white puppy",
        "eyes": "light blue",
        "expression": "calm, looking forward"
      }
    },
    "environment": {
      "setting": "outdoors in a winter scene",
      "elements": [
        "snow covering the ground",
        "bare trees in the background",
        "blurred silver car behind the girl"
      ],
      "sky": "clear light blue sky"
    },
    "mood": "cute, natural, winter outdoor moment",
    "camera_style": "soft depth of field, natural daylight, subtle winter tones"
  }
}`,
        tags: ["雪景", "宠物", "冬季", "人像"],
        source: "@ZaraIrahh",
        previewImage: "https://pbs.twimg.com/media/G6qMd2abwAA-hAi?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
    ],
  },
  {
    id: "creative",
    name: "创意实验",
    nameEn: "Creative Experiments",
    icon: "Sparkles",
    description: "突破常规的创意构图、人群生成、极简主义和时间一致性",
    prompts: [
      {
        id: "recursive-image",
        title: "递归视觉效果",
        titleEn: "Recursive Visuals",
        description: "展示模型处理无限循环逻辑的能力（Droste效果）",
        prompt: `recursive image of an orange cat sitting in an office chair holding up an iPad. On the iPad is the same cat in the same scene holding up the same iPad. Repeated on each iPad.`,
        tags: ["递归", "创意", "Droste效果", "猫"],
        source: "@venturetwins",
        previewImage: "https://github.com/user-attachments/assets/f7ef5a84-e2bf-4d4e-a93e-38a23a21b9ef",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "aging-through-years",
        title: "岁月变迁",
        titleEn: "Aging Through the Years",
        description: "展示单一主体的时间一致性和老化效果",
        prompt: `Generate the holiday photo of this person through the ages up to 80 years old`,
        tags: ["老化", "时间序列", "人像", "创意"],
        source: "@dr_cintas",
        previewImage: "https://github.com/user-attachments/assets/74fced67-0715-46d3-b788-d9ed9e98873b",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "star-wars-waldo",
        title: "星球大战找茬图",
        titleEn: "Star Wars Where's Waldo",
        description: "复杂人群和特定角色识别的测试",
        prompt: `A where is waldo image showing all Star Wars characters on Tatooine

First one to pull this off. First take. Even Waldo is there.`,
        tags: ["星球大战", "找茬", "人群", "创意"],
        source: "@creacas",
        previewImage: "https://github.com/user-attachments/assets/439317c2-4be8-4b28-803f-36427ecca31e",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "coordinate-visualization",
        title: "坐标可视化",
        titleEn: "Coordinate Visualization",
        description: "根据经纬度坐标生成特定地点和时间的场景",
        prompt: `35.6586° N, 139.7454° E at 19:00`,
        tags: ["坐标", "地点", "创意", "极简"],
        source: "Replicate",
        previewImage: "https://github.com/user-attachments/assets/8629b88a-b872-43e2-a19e-855542702ac2",
        nodeTemplate: { requiresImageInput: false, generatorType: "fast", aspectRatio: "16:9" },
      },
      {
        id: "split-view-3d",
        title: "3D分割视图渲染",
        titleEn: "Split View 3D Render",
        description: "创建一半真实一半线框的3D渲染图",
        prompt: `Create a high-quality, realistic 3D render of exactly one instance of the object: [Orange iPhone 17 Pro].
The object must float freely in mid-air and be gently tilted and rotated in 3D space (not front-facing).
Use a soft, minimalist dark background in a clean 1080×1080 composition.
Left Half — Full Realism
The left half of the object should appear exactly as it looks in real life
— accurate materials, colors, textures, reflections, and proportions.
This half must be completely opaque with no transparency and no wireframe overlay.
No soft transition, no fading, no blending.
Right Half — Hard Cut Wireframe Interior
The right half must switch cleanly to a wireframe interior diagram.
The boundary between the two halves must be a perfectly vertical, perfectly sharp, crisp cut line, stretching straight from the top edge to the bottom edge of the object.
No diagonal edges, no curved slicing, no gradient.
The wireframe must use only two line colors:
Primary: white (≈80% of all lines)
Secondary: a color sampled from the dominant color of the realistic half (<20% of lines)
The wireframe lines must be thin, precise, aligned, and engineering-style.
Every wireframe component must perfectly match the geometry of the object.`,
        tags: ["3D", "产品", "线框", "设计"],
        source: "@michalmalewicz",
        previewImage: "https://pbs.twimg.com/media/G7LmGCQWYAAfp47?format=jpg&name=small",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "usa-3d-diorama",
        title: "美国地标3D立体模型",
        titleEn: "USA 3D Diorama with Landmarks",
        description: "创建美国地标的等距3D立体模型",
        prompt: `Create a high-detail 3D isometric diorama of the entire United States, where each state is represented as its own miniature platform. Inside each state, place a stylized, small-scale 3D model of that state's most iconic landmark. Use the same visual style as a cute, polished 3D city diorama: soft pastel colors, clean materials, smooth rounded forms, gentle shadows, and subtle reflections. Each landmark should look like a miniature model, charming, simplified, but clearly recognizable. Arrange the states in accurate geographical layout, with consistent lighting and perspective. Include state labels and landmark labels in a clean, modern font, floating above or near each model.`,
        tags: ["3D", "地图", "地标", "立体模型"],
        source: "@DataExec",
        previewImage: "https://pbs.twimg.com/media/G7LGpq0XAAAxcIP?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "us-food-map",
        title: "美国食物地图",
        titleEn: "US Map Made of Famous Foods",
        description: "用各州著名食物制作的美国地图",
        prompt: `create a map of the US where every state is made out of its most famous food (the states should actually look like they are made of the food, not a picture of the food). Check carefully to make sure each state is right.`,
        tags: ["地图", "食物", "创意", "美国"],
        source: "@emollick",
        previewImage: "https://pbs.twimg.com/media/G7I5dbiWwAAYOox?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "emoji-combination",
        title: "表情符号组合",
        titleEn: "Emoji Combination",
        description: "以Google风格组合表情符号",
        prompt: `combine these emojis: 🍌 + 😎, on a white background as a google emoji design`,
        tags: ["表情符号", "设计", "创意", "Google"],
        source: "@NanoBanana",
        previewImage: "https://pbs.twimg.com/media/G7PmjRBXgAAVKXd?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: false, generatorType: "fast", aspectRatio: "1:1" },
      },
      {
        id: "torn-paper-art",
        title: "撕纸艺术效果",
        titleEn: "Torn Paper Art Effect",
        description: "在图片特定区域添加撕纸效果",
        prompt: `task: "edit-image: add widened torn-paper layered effect"

base_image:
  use_reference_image: true
  preserve_everything:
    - character identity
    - facial features and expression
    - hairstyle and anatomy
    - outfit design and colors
    - background, lighting, composition
    - overall art style

rules:
  - Only modify the torn-paper interior areas.
  - Do not change pose, anatomy, proportions, clothing details, shading, or scene elements.

effects:
  - effect: "torn-paper-reveal"
    placement: "across chest height"
    description:
      - Add a wide, natural horizontal tear across the chest area.
      - The torn interior uses the style defined in interior_style.

  - effect: "torn-paper-reveal"
    placement: "lower abdomen height"
    description:
      - Add a wide horizontal tear across the lower abdomen.
      - The torn interior uses the style defined in interior_style.

interior_style:
  mode: "line-art"
  style_settings:
    line-art:
      palette: "monochrome"
      line_quality: "clean, crisp"
      paper: "notebook paper with subtle ruled lines"`,
        tags: ["撕纸", "艺术", "编辑", "创意"],
        source: "@munou_ac",
        previewImage: "https://pbs.twimg.com/media/G7OpzpjbAAArAAS?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "isometric-home-office",
        title: "3D等距居家办公室",
        titleEn: "3D Isometric Home Office",
        description: "创建居家办公室的3D等距视图",
        prompt: `Generate a 3D isometric colored illustration of me working from home, filled with various interior details. The visual style should be rounded, polished, and playful. --ar 1:1

[Additional details: a bichon frise and 3 monitors]`,
        tags: ["3D", "等距", "居家办公", "插画"],
        source: "@dotey",
        previewImage: "https://pbs.twimg.com/media/G7MEwTWWEAA1DkO?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "city-tallest-buildings",
        title: "城市最高建筑3D视图",
        titleEn: "City's Tallest Buildings 3D View",
        description: "创建城市最高建筑的迷你3D视图",
        prompt: `Present a clear, side miniature 3D cartoon view of [YOUR CITY] tallest buildings. Use minimal textures with realistic materials and soft, lifelike lighting and shadows. Use a clean, minimalistic composition showing exactly the three tallest buildings in Sopot, arranged from LEFT to RIGHT in STRICT descending height order. The tallest must appear visibly tallest, the second must be clearly shorter than the first, and the third must be clearly shorter than the second.
All buildings must follow accurate relative proportions: if a building is taller in real life, it MUST be taller in the image by the same approximate ratio. No building may be visually stretched or compressed.
Each building should stand separately on a thin, simple ceramic base. Below each base, centered text should display:
Height in meters — semibold sans-serif, medium size
Year built — lighter-weight sans-serif, smaller size, directly beneath the height text
Provide consistent padding, spacing, leading, and kerning. Write "YOUR CITY NAME" centered above the buildings, using a medium-sized sans-serif font.
 No building top should overlap or touch the text above.Use accurate architectural proportions based on real-world references.Maintain consistent camera angle and identical scale for each building model.
No forced perspective. Use straight-on orthographic-style rendering. Do not exaggerate or stylize size differences beyond proportional accuracy.

Use a square 1080×1080 composition.Use a clean, neutral background. Ensure no extra objects are present.`,
        tags: ["3D", "建筑", "城市", "信息图"],
        source: "@michalmalewicz",
        previewImage: "https://pbs.twimg.com/media/G7GOJ7WW4AAEsNE?format=jpg&name=small",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "whiteboard-marker-art",
        title: "白板马克笔艺术",
        titleEn: "Whiteboard Marker Art",
        description: "模拟玻璃白板上的褪色马克笔画",
        prompt: `Create a photo of vagabonds musashi praying drawn on a glass whiteboard in a slightly faded green marker`,
        tags: ["白板", "马克笔", "艺术", "创意"],
        source: "@nicdunz",
        previewImage: "https://github.com/user-attachments/assets/b399c4d9-151b-4e15-9a40-f092f7a892b9",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "4:3" },
      },
      {
        id: "chalkboard-anime",
        title: "黑板动漫画",
        titleEn: "Chalkboard Anime Art Documentation",
        description: "黑板上的动漫角色粉笔画的写实记录",
        prompt: `{
  "intent": "Photorealistic documentation of a specific chalkboard art piece featuring a single anime character, capturing the ephemeral nature of the medium within a classroom context.",
  "frame": {
    "aspect_ratio": "4:3",
    "composition": "A centered medium shot focusing on the chalkboard mural. The composition includes the teacher's desk in the immediate foreground to provide scale, with the artwork of the single character dominating the background space.",
    "style_mode": "documentary_realism, texture-focused, ambient naturalism"
  },
  "subject": {
    "primary_subject": "A large-scale, intricate chalk drawing of Boa Hancock from 'One Piece' on a standard green classroom blackboard.",
    "visual_details": "The illustration depicts Boa Hancock in a commanding pose, positioned centrally on the board. She is drawn with her signature long, straight black hair with a hime cut, rendered using dense application of black chalk with white accents for sheen."
  },
  "environment": {
    "location": "A standard Japanese school classroom.",
    "foreground_elements": "A wooden teacher's desk occupies the lower foreground. Scattered across the surface are a yellow box of colored chalks, loose sticks of red, white, and blue pastel chalk, and a dust-covered black felt eraser."
  },
  "lighting": {
    "type": "Diffuse ambient classroom lighting.",
    "quality": "Soft, nondirectional illumination provided by overhead fluorescent fixtures mixed with daylight from windows on the left."
  }
}`,
        tags: ["黑板", "动漫", "粉笔画", "教室"],
        source: "@IamEmily2050",
        previewImage: "https://pbs.twimg.com/media/G65Uh3ebkAEqbv5?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "4:3" },
      },
    ],
  },
  {
    id: "education",
    name: "教育知识",
    nameEn: "Education & Knowledge",
    icon: "GraduationCap",
    description: "将文本概念转换为清晰的教育向量插图",
    prompts: [
      {
        id: "concept-infographic",
        title: "概念信息图",
        titleEn: "Concept Visualization",
        description: "将文本概念转换为清晰的教育向量插图",
        prompt: `Create an educational infographic explaining [Photosynthesis]. Visual Elements: Illustrate the key components: The Sun, a green Plant, Water (H2O) entering roots, Carbon Dioxide (CO2) entering leaves, and Oxygen (O2) being released. Style: Clean, flat vector illustration suitable for a high school science textbook. Use arrows to show the flow of energy and matter. Labels: Label each element clearly in English.`,
        tags: ["教育", "信息图", "科学", "插画"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/bfaee21b-d6da-4345-9340-e786ce07dbed",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "travel-journal",
        title: "儿童风格旅行日记",
        titleEn: "Kids' Crayon Travel Journal",
        description: "为城市生成儿童蜡笔风格的旅行日记插图",
        prompt: `Please create a vibrant, child-like crayon-style vertical (9:16) illustration titled "{City Name} Travel Journal."
The artwork should look as if it were drawn by a curious child using colorful crayons, featuring a soft, warm light-toned background (such as pale yellow), combined with bright reds, blues, greens, and other cheerful colors to create a cozy, playful travel atmosphere.

I. Main Scene: Travel-Journal Style Route Map
In the center of the illustration, draw a "winding, zigzagging travel route" with arrows and dotted lines connecting multiple locations.

II. Surrounding Playful Elements (Auto-adapt to the City)
Add many cute doodles and child-like decorative elements around the route, such as:
1. Adorable travel characters - A child holding a local snack, A little adventurer with a backpack
2. Q-style hand-drawn iconic landmarks
3. Funny signboards - "Don't get lost!", "Crowds ahead!", "Yummy food this way!"
4. Sticker-style short phrases
5. Cute icons of local foods
6. Childlike exclamations

III. Overall Art Style Requirements
- Crayon / children's hand-drawn travel diary style
- Bright, warm, colorful palette
- Cozy but full and lively composition
- Emphasize the joy of exploring
- All text should be in a cute handwritten font`,
        tags: ["旅行", "儿童", "蜡笔画", "日记"],
        source: "@dotey",
        previewImage: "https://pbs.twimg.com/media/G69WHFDW4AAv0TK?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "9:16" },
      },
      {
        id: "financial-sankey",
        title: "财务桑基图",
        titleEn: "Financial Sankey Diagram",
        description: "创建专业的财务桑基图可视化",
        prompt: `[Subject]: A professional financial Sankey diagram visualizing the Income Statement of a major corporation, in the style of "App Economy Insights" and US corporate financial reports.

[Visual Style]: High-fidelity vector infographic, clean minimalist aesthetic, flat design. The background is a clean, very light grey or off-white.

[Color Strategy - CRITICAL]:
Analyze the [Insert Brand Name Here] logo. Extract its primary brand color.
Use this primary color as the dominant theme for the main revenue flows and profit blocks.
Create a harmonious color palette based on this primary color.

[Composition & Structure]:
Flow: A horizontal flow from Left (Revenue Sources) to Right (Net Profit).
Texture: The connecting paths (flows) must appear "silky smooth" with elegant Bezier curves, looking like liquid ribbons, not jagged lines.
Iconography: On the left side, include specific, minimalist flat vector icons representing the business segments.
Branding: Place the official logo clearly at the top center.

[Details]: High resolution, 4k, sharp typography (sans-serif), professional data visualization layout.`,
        tags: ["财务", "数据可视化", "桑基图", "商业"],
        source: "@bggg_ai",
        previewImage: "https://pbs.twimg.com/media/G7P3UgNaYAAd1HN?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
    ],
  },
  {
    id: "ecommerce",
    name: "电商摄影",
    nameEn: "E-commerce & Virtual Studio",
    icon: "ShoppingBag",
    description: "虚拟模特试穿、产品摄影和商业展示",
    prompts: [
      {
        id: "virtual-tryon",
        title: "虚拟模特试穿",
        titleEn: "Virtual Model Try-On",
        description: "让模特穿上特定服装，保留面料纹理和光线融合",
        prompt: `Using Image 1 (the garment) and Image 2 (the model), create a hyper-realistic full-body fashion photo where the model is wearing the garment. Crucial Fit Details: The [T-shirt/Jacket] must drape naturally on the model's body, conforming to their posture and creating realistic folds and wrinkles. High-Fidelity Preservation: Preserve the original fabric texture, color, and any logos from Image 1 with extreme accuracy. Seamless Integration: Blend the garment into Image 2 by perfectly matching the ambient lighting, color temperature, and shadow direction. Photography Style: Clean e-commerce lookbook, shot on a Canon EOS R5 with a 50mm f/1.8 lens for a natural, professional look.`,
        tags: ["试穿", "电商", "服装", "模特"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/81eaafb6-901b-424d-a197-dc1bc0bfc5bf",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "product-photography",
        title: "专业产品摄影",
        titleEn: "Professional Product Photography",
        description: "将产品从杂乱背景中隔离，放置在高端商业摄影棚设置中",
        prompt: `Identify the main product in the uploaded photo (automatically removing any hands holding it or messy background details). Recreate it as a premium e-commerce product shot. Subject Isolation: Cleanly extract the product, completely removing any fingers, hands, or clutter. Background: Place the product on a pure white studio background (RGB 255, 255, 255) with a subtle, natural contact shadow at the base to ground it. Lighting: Use soft, commercial studio lighting to highlight the product's texture and material. Ensure even illumination with no harsh glare. Retouching: Automatically fix any lens distortion, improve sharpness, and color-correct to make the product look brand new and professional.`,
        tags: ["产品摄影", "电商", "白底", "商业"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/cdfd4934-d06a-48ee-bf28-58ce16c458c1",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "chibi-brand-store",
        title: "Q版品牌小店",
        titleEn: "3D Chibi-Style Miniature Brand Store",
        description: "为品牌创建迷你3D小店",
        prompt: `3D chibi-style miniature concept store of {Brand Name}, creatively designed with an exterior inspired by the brand's most iconic product or packaging (such as a giant {brand's core product, e.g., chicken bucket/hamburger/donut/roast duck}). The store features two floors with large glass windows clearly showcasing the cozy and finely decorated interior: {brand's primary color}-themed decor, warm lighting, and busy staff dressed in outfits matching the brand. Adorable tiny figures stroll or sit along the street, surrounded by benches, street lamps, and potted plants, creating a charming urban scene. Rendered in a miniature cityscape style using Cinema 4D, with a blind-box toy aesthetic, rich in details and realism, and bathed in soft lighting that evokes a relaxing afternoon atmosphere. --ar 2:3`,
        tags: ["3D", "品牌", "Q版", "盲盒风格"],
        source: "@dotey",
        previewImage: "https://pbs.twimg.com/media/G7BWvI8X0AApeZB?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "2:3" },
      },
      {
        id: "room-furnishing",
        title: "房间家具可视化",
        titleEn: "Room Furnishing Visualization",
        description: "可视化空房间配置家具后的效果",
        prompt: `Show me how this room would look with furniture in it`,
        tags: ["室内设计", "家具", "可视化", "房间"],
        source: "@NanoBanana",
        previewImage: "https://pbs.twimg.com/media/G63UHDYWoAAD_Hm?format=jpg&name=medium",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
    ],
  },
  {
    id: "workplace",
    name: "工作效率",
    nameEn: "Workplace & Productivity",
    icon: "Briefcase",
    description: "将白板草图转换为专业图表和UI原型",
    prompts: [
      {
        id: "flowchart-conversion",
        title: "手绘流程图转换",
        titleEn: "Hand-drawn Flowchart to Corporate Charts",
        description: "将白板草图转换为清晰的麦肯锡风格矢量图",
        prompt: `Convert this hand-drawn whiteboard sketch into a professional corporate flowchart suitable for a business presentation. Style Guide: Use a minimalist 'McKinsey-style' aesthetic: clean lines, ample whitespace, and a sophisticated blue-and-gray color palette. Structure: Automatically align all boxes and diamonds to a strict grid. Connect them with straight, orthogonal arrows (90-degree angles only, no curvy lines). Text: Transcribe the handwritten labels into a clear, bold Sans-Serif font (like Arial or Roboto). Output: High-resolution vector-style image on a pure white background.`,
        tags: ["流程图", "商务", "麦肯锡", "图表"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/c59d3272-7525-4be0-94e3-8d642baaa659",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "ui-prototype",
        title: "UI草图转高保真原型",
        titleEn: "UI Hand-drawn Sketch to High-Fidelity Prototype",
        description: "将线框草图转换为真实的移动应用原型",
        prompt: `Transform this rough wireframe sketch into a high-fidelity UI design mockups for a mobile app. Design System: Apply a modern, clean aesthetics similar to iOS 18 or Material Design 3. Use rounded corners, soft drop shadows, and a vibrant primary color. Components: Intelligently interpret the sketch: turn scribbles into high-quality placeholder images, convert rough rectangles into proper buttons with gradients, and turn lines into realistic text blocks. Layout: Ensure perfect padding and consistent spacing between elements. Context: Place the design inside a realistic iPhone 16 frame mockups.`,
        tags: ["UI", "原型", "移动应用", "设计"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/67690896-22f8-4abc-8e89-d4779233a7ad",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "magazine-layout",
        title: "杂志排版生成",
        titleEn: "Magazine Layout Generator",
        description: "将文章可视化为带有复杂排版的印刷格式",
        prompt: `Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [...the unformatted article]`,
        tags: ["杂志", "排版", "设计", "文章"],
        source: "@fofrAI",
        previewImage: "https://github.com/user-attachments/assets/5982a68e-8c7d-4c7c-a07e-2a4a0a74770d",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "16:9" },
      },
    ],
  },
  {
    id: "photo-editing",
    name: "照片编辑",
    nameEn: "Photo Editing & Restoration",
    icon: "ImagePlus",
    description: "智能扩图、人物移除和照片修复",
    prompts: [
      {
        id: "smart-outpainting",
        title: "智能扩图",
        titleEn: "Composition Rescue (Smart Outpainting)",
        description: "通过智能生成匹配的场景来扩展图片比例",
        prompt: `Zoom out and expand this image to a 16:9 aspect ratio (computer wallpaper size). Context Awareness: Seamlessly extend the scenery on both left and right sides. Match the original lighting, weather, and texture perfectly. Logical Completion: If there are cut-off objects (like a shoulder, a tree branch, or a building edge) on the borders, complete them naturally based on logical inference. Do not distort the original center image.`,
        tags: ["扩图", "壁纸", "编辑", "16:9"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/cc8c4e87-fe0f-4b8a-a610-a6d55ed0294c",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "crowd-removal",
        title: "智能人物移除",
        titleEn: "Smart Crowd Removal",
        description: "移除背景中不需要的人物并用合理的纹理填充",
        prompt: `Remove all the tourists/people in the background behind the main subject. Intelligent Fill: Replace them with realistic background elements that logically fit the scene (e.g., extend the cobblestone pavement, empty park benches, or grass textures). Consistency: Ensure no blurry artifacts or 'smudges' remain. The filled area must have the same grain, focus depth, and lighting as the rest of the photo.`,
        tags: ["移除", "背景", "编辑", "旅游照片"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/bade2fb0-f7d8-4435-91d4-ad0b41819c9b",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "cctv-simulation",
        title: "CCTV监控风格模拟",
        titleEn: "Face Detection CCTV Simulation",
        description: "创建带有人脸检测的高角度CCTV监控画面",
        prompt: `Create a high angle CCTV surveillance shot using the uploaded image as the source. Detect every visible person in the image and automatically draw a white rectangular bounding box around each face. For the most prominent person, add a large zoom in inset: a sharp, enhanced close-up of their face displayed in a floating rectangular frame connected with a thin white line. Keep the main image slightly noisy and security camera like (soft grain, slight distortion, muted colors), while the zoom in face box should be clearer, brighter, and more detailed. No text, no timestamps, no overlays except the boxes and connecting line. Maintain the original scene layout, angle, and environment of the uploaded image.`,
        tags: ["CCTV", "监控", "人脸检测", "创意"],
        source: "@egeberkina",
        previewImage: "https://pbs.twimg.com/media/G673aBCWUAAFUGn?format=jpg&name=900x900",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
    ],
  },
  {
    id: "interior",
    name: "室内设计",
    nameEn: "Interior Design",
    icon: "Home",
    description: "从平面图生成完整的设计展示板",
    prompts: [
      {
        id: "floor-plan-design",
        title: "平面图转设计展示",
        titleEn: "Hard Furnishing Preview",
        description: "从简单的2D平面图生成包含透视图和3D平面图的完整设计展示板",
        prompt: `Based on the uploaded 2D floor plan, generate a professional interior design presentation board in a single image. Layout: The final image should be a collage with one large main image at the top, and several smaller images below it. Content of Each Panel:
1. Main Image (Top): A wide-angle perspective view of the main living area, showing the connection between the living room and dining area.
2. Small Image (Bottom Left): A view of the Master Bedroom, focusing on the bed and window.
3. Small Image (Bottom Middle): A view of the Home Office / Study room.
4. Small Image (Bottom Right): A 3D top-down floor plan view showing the furniture layout.
Overall Style: Apply a consistent Modern Minimalist style with warm oak wood flooring and off-white walls across ALL images. Quality: Photorealistic rendering, soft natural lighting.`,
        tags: ["室内设计", "平面图", "3D渲染", "展示板"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/cf6d0304-60b6-4262-b4a1-08571f2c491e",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
    ],
  },
  {
    id: "social-media",
    name: "社交媒体",
    nameEn: "Social Media & Marketing",
    icon: "Megaphone",
    description: "病毒式封面图、缩略图和营销海报",
    prompts: [
      {
        id: "viral-thumbnail",
        title: "病毒式视频封面",
        titleEn: "Viral Cover Image",
        description: "创建带有文字叠加、夸张表情和明亮图形的吸引人封面",
        prompt: `Design a viral video thumbnail using the person from Image 1. Face Consistency: Keep the person's facial features exactly the same as Image 1, but change their expression to look excited and surprised. Action: Pose the person on the left side, pointing their finger towards the right side of the frame. Subject: On the right side, place a high-quality image of [a delicious avocado toast]. Graphics: Add a bold yellow arrow connecting the person's finger to the toast. Text: Overlay massive, pop-style text in the middle: '3分钟搞定!' (Done in 3 mins!). Use a thick white outline and drop shadow. Background: A blurred, bright kitchen background. High saturation and contrast.`,
        tags: ["封面", "YouTube", "TikTok", "缩略图"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/21b0d56c-a2a5-463a-9a0e-84100e9d08d8",
        nodeTemplate: { requiresImageInput: true, generatorType: "fast", aspectRatio: "16:9" },
      },
      {
        id: "promo-poster",
        title: "商业促销海报",
        titleEn: "Commercial Promotional Poster",
        description: "设计带有整合文字和高质量产品摄影的专业销售海报",
        prompt: `Design a professional promotional poster for a [Coffee Shop]. Composition: A cinematic close-up of a steaming cup of cappuccino on a rustic wooden table, autumn leaves in the background (cozy atmosphere). Text Integration:
1. Main Title: 'Autumn Special' written in elegant, gold serif typography at the top.
2. Offer: 'Buy One Get One Free' clearly displayed in a modern badge or sticker style on the side.
3. Footer: 'Limited Time Only' in small, clean text at the bottom.
Quality: Ensure all text is perfectly spelled, centered, and integrated into the image's depth of field.`,
        tags: ["海报", "促销", "营销", "商业"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/b65a064a-8519-4907-9497-90f00f9dba17",
        nodeTemplate: { requiresImageInput: false, generatorType: "pro", aspectRatio: "3:4" },
      },
    ],
  },
  {
    id: "translation",
    name: "翻译本地化",
    nameEn: "Daily Life & Translation",
    icon: "Globe",
    description: "菜单翻译、漫画本地化，保留原始纹理",
    prompts: [
      {
        id: "menu-translation",
        title: "菜单翻译",
        titleEn: "Physical Store/Travel Translation",
        description: "翻译菜单或标志，同时保留原始表面纹理",
        prompt: `Translate the Chinese dish names on the wall menu into English for foreign tourists. Texture Preservation: Crucial! Maintain the original aged, greasy, and textured look of the wall/paper. The new English text should look like it was written/printed on the same surface, with slight fading or wear to match. Currency: Keep the '¥' symbol and price numbers exactly as they are; do not convert currency. Layout: align the English translations next to or replacing the Chinese characters naturally.`,
        tags: ["翻译", "菜单", "旅行", "本地化"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/46c82371-4f9d-431c-9a11-65f51862a792",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "16:9" },
      },
      {
        id: "comic-localization",
        title: "漫画/表情包本地化",
        titleEn: "Digital Content Localization",
        description: "通过清除文字气泡并替换为匹配字体的内容来翻译漫画或表情包",
        prompt: `Translate the text in the speech bubbles/captions from [Japanese/English] to [Chinese]. Seamless Cleaning: Erase the original text and perfectly fill the background (e.g., the white speech bubble or the colored image background). Style Matching: Render the translated Chinese text using a casual, handwritten-style font (or bold impact font for memes) that matches the aesthetic of the original image. Fit: Ensure the text fits naturally within the bubbles without overcrowding.`,
        tags: ["翻译", "漫画", "表情包", "本地化"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/2cb58cf3-c05f-45d0-9f04-67fd7ba00267",
        nodeTemplate: { requiresImageInput: true, generatorType: "fast", aspectRatio: "1:1" },
      },
    ],
  },
  {
    id: "avatars",
    name: "头像社交",
    nameEn: "Social Networking & Avatars",
    icon: "User",
    description: "3D盲盒风格头像、宠物表情包和Y2K风格海报",
    prompts: [
      {
        id: "blindbox-avatar",
        title: "3D盲盒风格头像",
        titleEn: "3D Blind Box Style Avatar",
        description: "将肖像转换为可爱的C4D风格泡泡玛特玩具角色",
        prompt: `Transform the person in the uploaded photo into a cute 3D Pop Mart style blind box character. Likeness: Keep key features recognizable: [hair color, glasses, hairstyle]. Style: C4D rendering, occlusion render, cute Q-version, soft studio lighting, pastel colors. Background: A simple, solid matte color background (e.g., soft blue). Detail: The character should have a smooth, plastic toy texture with a slight glossy finish. Facing forward, friendly expression.`,
        tags: ["盲盒", "头像", "3D", "泡泡玛特"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/da445a7e-cf15-44be-ad18-d66b8fb78ae8",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "1:1" },
      },
      {
        id: "pet-meme",
        title: "宠物表情包",
        titleEn: "Pet Meme Creation",
        description: "将宠物照片转换为极简主义的手绘搞笑贴纸",
        prompt: `Turn this photo of my [cat/dog] into a funny hand-drawn WeChat sticker. Style: Minimalist ugly-cute line drawing (doodle style). White background. Expression: Exaggerate the animal's expression to look extremely shocked/judgemental/lazy (based on photo). Accessories: Add cute little doodles like sweat drops, question marks, or sparkles around the head. Text: Add handwritten text at the bottom: 'So Dumb'. Ensure the text style is messy and funny.`,
        tags: ["宠物", "表情包", "贴纸", "搞笑"],
        source: "WeChat Article",
        previewImage: "https://github.com/user-attachments/assets/9fc5866a-e62e-43b9-af83-8fa5f6421d33",
        nodeTemplate: { requiresImageInput: true, generatorType: "fast", aspectRatio: "1:1" },
      },
      {
        id: "y2k-scrapbook",
        title: "Y2K剪贴簿海报",
        titleEn: "Y2K Scrapbook Poster with Multiple Poses",
        description: "创建带有多种姿势的Y2K风格剪贴簿海报",
        prompt: `"facelock_identity": "true",
"accuracy": "100%",
scene: "Colorful Y2K scrapbook poster aesthetic, vibrant stickers, multiple subjects wearing the same outfit and hairstyle with different poses and cutouts, colorful strokes and lines, frameless collage style. Includes: close-up shot with heart-shape fingers, full-body squatting pose supporting chin while holding a white polaroid camera, mid-shot touching cheek while blowing pink bubblegum, mid-shot smiling elegantly while holding a cat, seated elegantly with one eye winking and peace sign, and mid-shot holding daisy flowers. Holographic textures, pastel gradients, glitter accents, playful doodles, magazine cut-out graphics, chaotic yet balanced layout, extremely artistic and visually engaging",
main_subject: {
"description": "A young Y2K-styled woman as the main focus in the center of the scrapbook collage.",
"style_pose": "Playful and confident Y2K pose — slight side hip pop, one hand holding a lens-flare keychain, face toward the camera with a cute-cool expression, slight pout, candid early-2000s photo vibe."
}
outfit: {
"top": "Cropped oversized sweater in pastel color with embroidered patches",
"bottom": "pastel skirt with a white belt",
"socks": "White ankle socks with colorful pastel stripes",
"shoes": "white sneakers"
}`,
        tags: ["Y2K", "剪贴簿", "海报", "复古"],
        source: "@ShreyaYadav___",
        previewImage: "https://pbs.twimg.com/media/G7JduAQa8AEofUY?format=jpg&name=large",
        nodeTemplate: { requiresImageInput: true, generatorType: "pro", aspectRatio: "3:4" },
      },
      {
        id: "japanese-snap",
        title: "日式快照风格",
        titleEn: "Japanese High School Student Snap Photo",
        description: "创建日本高中生风格的随拍照片",
        prompt: `A daily snapshot taken with a low-quality disposable camera. A clumsy photo taken by a Japanese high school student. (Aspect ratio 3:2 is recommended)`,
        tags: ["日式", "快照", "一次性相机", "学生"],
        source: "@SSSS_CRYPTOMAN",
        previewImage: "https://pbs.twimg.com/media/G6z7gUVa0AMf1-G?format=jpg&name=small",
        nodeTemplate: { requiresImageInput: false, generatorType: "fast", aspectRatio: "3:2" },
      },
      {
        id: "skin-analysis",
        title: "AI皮肤分析",
        titleEn: "AI Skin Analysis and Skincare Routine",
        description: "分析皮肤并提供护肤建议",
        prompt: `You are a professional skin analyst and skincare expert.
The user uploads a close-up photo of their face and may add short notes (age, allergies, current routine, pregnancy, etc.). Use ONLY what you see in the image plus the user text.
1. Carefully inspect the skin: shine, pores, redness, blemishes, spots, texture, flaking, fine lines, dark circles, etc.
2. Decide the main skin type: oily, dry, normal, combination, or sensitive.
3. Identify visible issues: acne/breakouts, blackheads/whiteheads, post-acne marks, hyperpigmentation, redness, enlarged pores, uneven texture, dehydration, fine lines, dark circles, puffiness, etc.

RESPONSE FORMAT (very important)
Your answer must be plain text in this exact structure:
1. First, write 3–6 short lines describing the skin and problems
2. On a new line, write the word in caps: SKIN ROUTINE
3. Under SKIN ROUTINE, give at least 5 numbered steps (1., 2., 3., …).
Each step must include what to do, product TYPE and key INGREDIENTS to look for, when to use it, and 1 short practical instruction.`,
        tags: ["皮肤分析", "护肤", "美容", "AI分析"],
        source: "@Samann_ai",
        previewImage: "https://pbs.twimg.com/media/G7QJQpOXEAAqAP1?format=jpg&name=large",
        nodeTemplate: { requiresImageInput: true, generatorType: "fast", aspectRatio: "1:1" },
      },
    ],
  },
];

// 图标映射
export const promptIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Sparkles,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  ImagePlus,
  Home,
  Megaphone,
  Globe,
  User,
};

// 图标颜色映射
export const promptIconColors: Record<string, string> = {
  Camera: "bg-rose-500/10 text-rose-500",
  Sparkles: "bg-purple-500/10 text-purple-500",
  GraduationCap: "bg-blue-500/10 text-blue-500",
  ShoppingBag: "bg-amber-500/10 text-amber-500",
  Briefcase: "bg-slate-500/10 text-slate-500",
  ImagePlus: "bg-green-500/10 text-green-500",
  Home: "bg-orange-500/10 text-orange-500",
  Megaphone: "bg-pink-500/10 text-pink-500",
  Globe: "bg-cyan-500/10 text-cyan-500",
  User: "bg-indigo-500/10 text-indigo-500",
};

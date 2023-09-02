export const questions = {
    foot: {
        "part": "Foot",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the foot?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/foot/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/foot/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Is it at least moderately painful when you press on the injured portion of your foot?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/foot/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/foot/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to bear weight and take two steps?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/foot/rice_observe_pt"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/foot/visit_er"
                    }
                ]
            }
        ]
    },
    ankle: {
        "part": "Ankle",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the ankle?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/ankle/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/ankle/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/ankle/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/ankle/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to bear weight and take two steps?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/ankle/visit_pt"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/ankle/visit_er"
                    }
                ]
            }
        ]
    },
    knee: {
        "part": "Knee",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to bend the knee?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/knee/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/knee/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/knee/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/knee/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to bear weight and take two steps?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/knee/visit_pt"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/knee/visit_er"
                    }
                ]
            }
        ]
    },
    hip: {
        "part": "Hip",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to rotate the hip?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/hip/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/hip/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/hip/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/hip/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to bear weight and take two steps?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/hip/visit_pt"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/hip/visit_er"
                    }
                ]
            }
        ]
    },
    back: {
        "part": "Back",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to bend the back?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/back/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/back/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/:body_part_id/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/back/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to bear weight and take two steps?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/questions/back/3"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/back/visit_er"
                    }
                ]
            },
            {
                "id": 3,
                "text": "Are you experiencing new tingling or numbness with loss of strength?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/back/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/back/4"
                    }
                ]
            },
            {
                "id": 4,
                "text": "Are you experiencing changes in bowel and bladder control?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/back/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/back/visit_pt"
                    }
                ]
            }
        ]
    },
    neck: {
        "part": "Neck",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the neck?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/neck/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/neck/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/:body_part_id/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/neck/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to do a push up or use your arms to push yourself up from a chair?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/questions/neck/3"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/neck/visit_er"
                    }
                ]
            },
            {
                "id": 3,
                "text": "Are you experiencing new tingling or numbness with loss of strength?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/neck/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/neck/4"
                    }
                ]
            },
            {
                "id": 4,
                "text": "Are you experiencing changes in bowel and bladder control?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/neck/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/neck/visit_pt"
                    }
                ]
            }
        ]
    },
    shoulder: {
        "part": "Shoulder",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the shoulder?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/shoulder/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/shoulder/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/shoulder/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/shoulder/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to do a push up or use your arms to push yourself up from a chair?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/questions/shoulder/3"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/shoulder/visit_er"
                    }
                ]
            },
            {
                "id": 3,
                "text": "Are you experiencing new tingling or numbness with loss of strength?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/shoulder/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/shoulder/visit_pt"
                    }
                ]
            }
        ]
    },
    elbow: {
        "part": "Elbow",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to bend the elbow?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/elbow/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/elbow/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/elbow/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/elbow/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to do a push up or use your arms to push yourself up from a chair?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/questions/elbow/3"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/elbow/visit_er"
                    }
                ]
            },
            {
                "id": 3,
                "text": "Are you experiencing new tingling or numbness with loss of strength?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/elbow/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/elbow/visit_pt"
                    }
                ]
            }
        ]
    },
    wrist: {
        "part": "Wrist",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the wrist?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/wrist/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/wrist/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/wrist/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/wrist/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to do a push up or use your arms to push yourself up from a chair?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/wrist/visit_pt"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/wrist/visit_er"
                    }
                ]
            }
        ]
    },
    hand: {
        "part": "Hand",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to use the hand?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/hand/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/hand/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/hand/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/hand/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Are you able to do a push up or use your arms to push yourself up from a chair?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/hand/visit_pt"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/hand/visit_er"
                    }
                ]
            }
        ]
    },
    finger: {
        "part": "Finger(s)",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the finger(s)?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/finger/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/finger/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/finger/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/finger/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Does moving the finger(s) with an unaffected hand cause pain?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/finger/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/hand/visit_pt"
                    }
                ]
            }
        ]
    },
    toe: {
        "part": "Toe(s)",
        "questions": [
            {
                "id": 0,
                "text": "Did you have an injury associated with immediate swelling, bruising, or inability to move the toe(s)?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/toe/imaging"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/toe/1"
                    }
                ]
            },
            {
                "id": 1,
                "text": "Have you had surgery on this area in the past six weeks?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/toe/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/questions/toe/2"
                    }
                ]
            },
            {
                "id": 2,
                "text": "Does moving the toe(s) with an unaffected hand cause pain?",
                "answers": [
                    {
                        "id": 0,
                        "text": "Yes",
                        "forward_route": "/results/toe/visit_er"
                    },
                    {
                        "id": 1,
                        "text": "No",
                        "forward_route": "/results/hand/visit_pt"
                    }
                ]
            }
        ]
    }
}